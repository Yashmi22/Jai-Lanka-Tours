import React, { useState, useEffect, useCallback } from 'react';
import api from '../../api';
import { FaCloudUploadAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { uploadImageToCloudinary } from '../../utils/imageUpload';

const AdminDiscover = () => {

    const [discoveries, setDiscoveries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        tag: '',
        category: 'Cultural',
        type: 'destination', 
        desc: '',
        duration: '',
        rating: '',
        bestTime: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [uploading, setUploading] = useState(false); 

    const categories = ['Cultural', 'Adventure', 'Wellness', 'Romantic', 'Beach'];

    // 🔄 Fetch Existing Data
   // 🔄 Fetch Existing Data (useCallback)
const fetchDiscoveries = useCallback(async () => {
    try {
        const res = await api.get('/discover');
        
        if (res.data && Array.isArray(res.data)) {
            setDiscoveries(res.data);
        } else if (res.data && Array.isArray(res.data.data)) {
            setDiscoveries(res.data.data);
        } else {
            setDiscoveries([]);
        }
        setLoading(false);
    } catch (err) {
        console.error("Error fetching discoveries:", err);
        setLoading(false);
    }
}, []); 

    useEffect(() => {
        fetchDiscoveries();
    }, [fetchDiscoveries]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    
    const startEdit = (item) => {
        setIsEditing(true);
        setCurrentId(item._id);
        setFormData({
            name: item.name || '',
            tag: item.tag || '',
            category: item.category || 'Cultural',
            type: item.type || 'destination',
            desc: item.desc || item.description || '',
            duration: item.duration || '',
            rating: item.rating || '',
            bestTime: item.bestTime || ''
        });
        setPreviewUrl(item.img || ''); 
        setImageFile(null); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 🗑️ Delete Handler
    const deleteDiscover = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await api.delete(`/discover/${id}`);
                alert("Item deleted successfully!");
                fetchDiscoveries();
            } catch (err) {
                console.error("Error deleting item:", err);
                alert(`Failed to delete item.`);
            }
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentId(null);
        setFormData({ 
            name: '', 
            tag: '', 
            category: 'Cultural', 
            type: 'destination', 
            desc: '',
            duration: '',
            rating: '',
            bestTime: ''
        });
        setImageFile(null);
        setPreviewUrl('');
    };

    // 📥 Form Submit (Create or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!imageFile && !isEditing) {
            alert("Please select an image from your device!");
            return;
        }

        setUploading(true);

        try {
            let finalImageUrl = previewUrl; 

            // පින්තූරයක් තෝරාගෙන තිබේ නම් පමණක් Cloudinary එකට යවන්න
            if (imageFile) {
                finalImageUrl = await uploadImageToCloudinary(imageFile);
            }

            const finalData = {
                name: formData.name,
                tag: formData.tag,
                category: formData.category,
                type: formData.type,
                desc: formData.desc, 
                img: finalImageUrl,
                duration: formData.duration || undefined,
                rating: formData.rating || undefined,
                bestTime: formData.bestTime || undefined
            };

            // 🎯 404 නිදොස්කරණය සඳහා URL එක වෙන් කර ගැනීම
            if (isEditing) {
                await api.put(`/discover/${currentId}`, finalData);
                alert(`${formData.type.toUpperCase()} Updated Successfully!`);
            } else {
                await api.post(`/discover`, finalData);
                alert(`${formData.type.toUpperCase()} Added Successfully with Cloudinary!`);
            }
            
            resetForm();
            fetchDiscoveries(); 
        } catch (err) {
            console.error("Axios Error Status:", err.response?.status);
            console.error("Full Error Details:", err);
            
            if (err.response?.status === 404) {
                alert(`Error 404: Backend Route එක සොයාගත නොහැක!\nකරුණාකර Backend server.js එකේ app.use('/api/discover', ...) නිවැරදිදැයි බලන්න.`);
            } else {
                alert('Error saving data. Please check backend response or connection.');
            }
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#030b13] p-6 md:p-16 font-sans text-[#d3d7db]">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#005483] block mb-2">Admin Portal</span>
                    <h1 className="text-5xl font-serif italic">
                        {isEditing ? "✏️ Edit Discovery" : "Manage Discoveries (Cloudinary)"}
                    </h1> 
                </header>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-12 space-y-8 mb-16">
                    {/* Select Type */}
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
                        {/* Location Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Location Name</label>
                            <input 
                                name="name" value={formData.name} onChange={handleChange} required
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none transition-all"
                                placeholder="e.g. Sigiriya"
                            />
                        </div>

                        {/* Tagline */}
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

                        {/* Image Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Select Image</label>
                            <div className="relative w-full p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#005483] transition-all flex flex-col items-center justify-center min-h-[56px] cursor-pointer">
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                />
                                <div className="flex items-center gap-3 text-slate-500 text-xs">
                                    <FaCloudUploadAlt className="text-xl text-[#005483]" />
                                    <span>{imageFile ? imageFile.name : (isEditing ? "Leave empty to keep current image" : "Choose image from device")}</span>
                                </div>
                            </div>
                            {previewUrl && (
                                <div className="mt-2 ml-2 w-24 h-16 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>

                        {/* Duration */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Ideal Duration</label>
                            <input 
                                name="duration" value={formData.duration} onChange={handleChange}
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none"
                                placeholder="e.g. 2-3 Days"
                            />
                        </div>

                        {/* Rating */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Rating Score</label>
                            <input 
                                name="rating" value={formData.rating} onChange={handleChange}
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none"
                                placeholder="e.g. 4.8"
                            />
                        </div>

                        {/* Best Season */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Best Season to Visit</label>
                            <input 
                                name="bestTime" value={formData.bestTime} onChange={handleChange}
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none"
                                placeholder="e.g. Jan - April"
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

                    <div className="flex gap-4">
                        {isEditing && (
                            <button 
                                type="button" 
                                onClick={resetForm}
                                className="w-1/3 py-5 bg-slate-200 text-slate-700 rounded-2xl text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-slate-300 transition-all duration-300"
                            >
                                Cancel
                            </button>
                        )}
                        <button 
                            type="submit"
                            disabled={uploading}
                            className={`${isEditing ? 'w-2/3' : 'w-full'} py-5 bg-[#005483] text-white rounded-2xl text-[11px] font-bold tracking-[0.3em] uppercase hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 disabled:bg-slate-400`}
                        >
                            {uploading ? "Uploading to Cloudinary..." : (isEditing ? "Update Discovery" : "Publish to Discover Page")}
                        </button>
                    </div>
                </form>

                {/* LIST OF EXISTING DISCOVERIES */}
                <div className="bg-[#0b0f19] p-6 md:p-8 rounded-[2rem] border border-slate-800 text-white shadow-xl">
                    <h2 className="text-xl font-bold mb-6 tracking-wide text-slate-100">Existing Discoveries</h2>
                    
                    {loading ? (
                        <p className="text-amber-400 italic text-sm">Loading database data...</p>
                    ) : discoveries.length === 0 ? (
                        <p className="text-slate-500 italic text-sm">No discovery items found in database.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-400 border-collapse">
                                <thead className="bg-[#111726] text-xs uppercase tracking-wider text-slate-300 border-b border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-slate-300">Cover</th>
                                        <th className="px-6 py-4 font-semibold text-slate-300">Title</th>
                                        <th className="px-6 py-4 font-semibold text-slate-300">Category</th>
                                        <th className="px-6 py-4 font-semibold text-slate-300 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    {discoveries.map((item) => (
                                        <tr key={item._id} className="hover:bg-[#111726]/60 transition-colors duration-200">
                                            <td className="px-6 py-4">
                                                <img 
                                                    src={item.img || 'https://via.placeholder.com/150'} 
                                                    className="w-14 h-10 object-cover rounded-lg bg-slate-900 border border-slate-800" 
                                                    alt={item.name} 
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-white font-medium text-base capitalize">{item.name}</td>
                                            <td className="px-6 py-4 text-sm text-amber-400 font-semibold">{item.category}</td>
                                            <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                                                <button 
                                                    type="button"
                                                    onClick={() => startEdit(item)} 
                                                    className="p-2.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
                                                    title="Edit Item"
                                                >
                                                    <FaEdit size={14} />
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={() => deleteDiscover(item._id)} 
                                                    className="p-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
                                                    title="Delete Item"
                                                >
                                                    <FaTrashAlt size={14} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDiscover;