import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Delete, CloudUpload, Add, Remove, Image } from '@mui/icons-material';
import { uploadImageToCloudinary } from '../../utils/imageUpload';

const axiosInstance = axios;

const AdminItinerary = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItineraryId, setCurrentItineraryId] = useState(null);
    
    const [uploading, setUploading] = useState(false); 

    // Admin preview images rotate   state 
    const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

    const categories = [
        'Off Road Adventure Tour', 
        'Culture & Wildlife Tour', 
        'North & East Coast Tour', 
        'Romantic Tour', 
        'Ayurvedic & Wellness Tour', 
        'Differently able Tour',
    ];
    
    const accOptions = ['Standard (Guesthouses)', '3-Star Hotels', '4-Star Hotels', '5-Star Luxury', 'Boutique Villas'];

    // Initial Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'Off Road Adventure Tour', 
        tag: '',
        accommodation: '3-Star Hotels', 
        desc: '',
        imageUrl: '', 
        tourPlan: [{ dayNumber: 1, title: '', description: '', dayImage: '', images: [] }],
        hotels: [{ hotelName: '', location: '', hotelDesc: '', hotelImage: '' }]
    });

 
    useEffect(() => {
        const imgArray = formData.imageUrl ? formData.imageUrl.split(',') : [];
        if (imgArray.length > 1) {
            const interval = setInterval(() => {
                setCurrentPreviewIndex((prev) => (prev + 1) % imgArray.length);
            }, 3000); // 3minitus
            return () => clearInterval(interval);
        }
    }, [formData.imageUrl]);

    // Fetch Itineraries
    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const res = await axiosInstance.get(`${API_BASE_URL}/itineraries`);
                setItineraries(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error loading itineraries from database:", err);
                setLoading(false);
            }
        };

        fetchItineraries();
    }, [API_BASE_URL]);

    // 🔄 Images 4
    const handleMultipleImagesUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        if (files.length > 4) {
            alert("You can only upload up to 4 images!");
            return;
        }

        try {
            setUploading(true);
            const uploadPromises = files.map(file => uploadImageToCloudinary(file));
            const uploadedUrls = await Promise.all(uploadPromises);
            
            // සාර්ථකව upload වුණු ඒවා විතරක් අරන් comma වලින් join කරනවා
            const validUrls = uploadedUrls.filter(url => url);
            
            if (validUrls.length > 0) {
                setFormData(prev => ({ ...prev, imageUrl: validUrls.join(',') }));
                setCurrentPreviewIndex(0); // index එක reset කරනවා
                alert(`${validUrls.length} Slider Images uploaded successfully!`);
            }
        } catch (err) {
            console.error("Slider images upload error:", err);
            alert("Failed to upload Slider Images.");
        } finally {
            setUploading(false);
        }
    };

    // 🔄 Day Image Upload (Cloudinary)
    const handleDayImageUpload = async (index, e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setUploading(true);
            const uploadedUrl = await uploadImageToCloudinary(file); 
            
            if (uploadedUrl) {
                const updatedTourPlan = [...formData.tourPlan];
                updatedTourPlan[index].dayImage = uploadedUrl;
                updatedTourPlan[index].images = [uploadedUrl]; 
                
                setFormData(prev => ({ ...prev, tourPlan: updatedTourPlan }));
                alert("Day Image uploaded successfully!");
            }
        } catch (error) {
            console.error("Image upload error:", error);
            alert("Failed to upload Day Image.");
        } finally {
            setUploading(false);
        }
    };

    // 🔄 Hotel Image Upload (Cloudinary)
    const handleHotelImageUpload = async (index, e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setUploading(true);
            const uploadedUrl = await uploadImageToCloudinary(file);
            if (uploadedUrl) {
                const updatedHotels = [...formData.hotels];
                updatedHotels[index]['hotelImage'] = uploadedUrl;
                setFormData(prev => ({ ...prev, hotels: updatedHotels }));
                alert("Hotel Image uploaded successfully!");
            }
        } catch (err) {
            alert("Failed to upload Hotel Image.");
        } finally {
            setUploading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDayInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDays = [...formData.tourPlan];
        updatedDays[index][name] = value;
        setFormData({ ...formData, tourPlan: updatedDays });
    };

    const addDayField = () => {
        setFormData({
            ...formData,
            tourPlan: [...formData.tourPlan, { dayNumber: formData.tourPlan.length + 1, title: '', description: '', dayImage: '', images: [] }]
        });
    };

    const removeDayField = (index) => {
        if (formData.tourPlan.length > 1) {
            const updatedDays = formData.tourPlan.filter((_, i) => i !== index).map((day, i) => ({
                ...day,
                dayNumber: i + 1 
            }));
            setFormData({ ...formData, tourPlan: updatedDays });
        }
    };

    const handleHotelInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedHotels = [...formData.hotels];
        updatedHotels[index][name] = value;
        setFormData({ ...formData, hotels: updatedHotels });
    };

    const addHotelField = () => {
        setFormData({
            ...formData,
            hotels: [...formData.hotels, { hotelName: '', location: '', hotelDesc: '', hotelImage: '' }]
        });
    };

    const removeHotelField = (index) => {
        if (formData.hotels.length > 0) {
            const updatedHotels = formData.hotels.filter((_, i) => i !== index);
            setFormData({ ...formData, hotels: updatedHotels });
        }
    };

    const refreshData = async () => {
        try {
            const res = await axiosInstance.get(`${API_BASE_URL}/itineraries`);
            setItineraries(res.data);
        } catch (err) {
            console.error("Error refreshing data:", err);
        }
    };

   
    const startEdit = (itinerary) => {
        setIsEditing(true);
        setCurrentItineraryId(itinerary._id);

        setFormData({
            title: itinerary.title || '',
            category: itinerary.category || 'Off Road Adventure Tour', 
            tag: itinerary.tag || '',
            accommodation: itinerary.accommodation || '3-Star Hotels',
            desc: itinerary.description || itinerary.desc || '', 
            imageUrl: itinerary.imageUrl || '', 
            tourPlan: itinerary.tourPlan && itinerary.tourPlan.length > 0 
                ? itinerary.tourPlan.map((plan, idx) => ({
                    dayNumber: plan.dayNumber || idx + 1,
                    title: plan.title || '',
                    description: Array.isArray(plan.activities) ? plan.activities.join('\n') : plan.activities || plan.description || '',
                    dayImage: plan.dayImage || (plan.images && plan.images[0]) || '',
                    images: plan.images || []
                }))
                : [{ dayNumber: 1, title: '', description: '', dayImage: '', images: [] }],
            hotels: itinerary.hotels && itinerary.hotels.length > 0 
                ? itinerary.hotels.map(h => ({
                    hotelName: h.name || h.hotelName || '', 
                    location: h.location || '',
                    hotelDesc: h.description || h.desc || h.hotelDesc || '', 
                    hotelImage: h.img || h.hotelImage || '' 
                }))
                : [{ hotelName: '', location: '', hotelDesc: '', hotelImage: '' }]
        });
        setCurrentPreviewIndex(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const deleteItinerary = async (id) => {
        if (window.confirm("Are you sure you want to delete this itinerary?")) {
            try {
                await axios.delete(`${API_BASE_URL}/itineraries/${id}`);
                alert("Itinerary deleted successfully!");
                refreshData();
            } catch (err) {
                console.error("Error deleting itinerary:", err);
                alert("Failed to delete itinerary.");
            }
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItineraryId(null);
        setFormData({
            title: '',
            category: 'Off Road Adventure Tour', 
            tag: '',
            accommodation: '3-Star Hotels',
            desc: '',
            imageUrl: '',
            tourPlan: [{ dayNumber: 1, title: '', description: '', dayImage: '', images: [] }],
            hotels: [{ hotelName: '', location: '', hotelDesc: '', hotelImage: '' }]
        });
        setCurrentPreviewIndex(0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (uploading) {
            alert("Please wait until images are uploaded completely!");
            return;
        }
        
        const filteredHotels = formData.hotels
            .filter(h => h.hotelName.trim() !== '' || h.location.trim() !== '')
            .map(h => ({
                name: h.hotelName, 
                location: h.location,
                desc: h.hotelDesc, 
                img: h.hotelImage || '' 
            }));

        const formattedTourPlan = formData.tourPlan.map((day, idx) => ({
            dayNumber: day.dayNumber || idx + 1,
            title: day.title,
            activities: day.description ? [day.description] : [],
            dayImage: day.dayImage || '',  
            imageUrl: day.dayImage || '',
            images: day.images || (day.dayImage ? [day.dayImage] : [])
        }));

        
        const cleanImageUrl = formData.imageUrl 
            ? formData.imageUrl.split(',').map(url => url.trim()).join(',') 
            : '';

        const dataToSend = {
            title: formData.title,
            category: formData.category, 
            tag: formData.tag,
            accommodation: formData.accommodation,
            description: formData.desc, 
            imageUrl: cleanImageUrl, 
            tourPlan: formattedTourPlan,
            hotels: filteredHotels 
        };

        console.log(" data send Frontend to Backend :", dataToSend);

        try {
            if (isEditing) {
                await axios.put(`${API_BASE_URL}/itineraries/${currentItineraryId}`, dataToSend);
                alert("Itinerary updated successfully!");
            } else {
                await axios.post(`${API_BASE_URL}/itineraries`, dataToSend);
                alert("Itinerary created successfully!");
            }
            resetForm();
            refreshData();
        } catch (err) {
            console.error("Error submitting itinerary:", err);
            alert("Error saving itinerary.");
        }
    };

    // UI  image list 
    const previewImages = formData.imageUrl ? formData.imageUrl.split(',') : [];

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold border-b border-slate-800 pb-4 text-amber-400 mb-8">
                    {isEditing ? "✏️ Edit Premium Itinerary" : "✨ Create New Premium Itinerary"}
                </h1>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="bg-[#111726] p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Tour Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                            <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition">
                                {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Duration Tag (e.g. 7 Days / 6 Nights)</label>
                            <input type="text" name="tag" value={formData.tag} onChange={handleInputChange} className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Default Accommodation Grade</label>
                            <select name="accommodation" value={formData.accommodation} onChange={handleInputChange} className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition">
                                {accOptions.map((acc, i) => <option key={i} value={acc}>{acc}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Overview Description</label>
                        <textarea name="desc" value={formData.desc} onChange={handleInputChange} required rows="4" className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none transition resize-none"></textarea>
                    </div>

                    {/* Modifed: Cover Image Upload to  card Images */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Cover Slider Images (Select up to 4 images)</label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#0b0f19] p-4 rounded-xl border border-slate-800">
                            <label className="cursor-pointer bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase px-4 py-2.5 rounded-lg flex items-center gap-2 transition">
                                <CloudUpload style={{ fontSize: '16px' }} /> Upload  Image
                                <input type="file" accept="image/*" multiple onChange={handleMultipleImagesUpload} className="hidden" />
                            </label>
                            
                            {/* Rotating Preview Section */}
                            {previewImages.length > 0 && (
                                <div className="flex items-center gap-3">
                                    <div className="relative w-20 h-14 rounded overflow-hidden border border-slate-700 bg-slate-900">
                                        <img 
                                            src={previewImages[currentPreviewIndex]} 
                                            className="w-full h-full object-cover transition-opacity duration-500" 
                                            alt="Preview Sliding" 
                                        />
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">
                                        {previewImages.length} images selected 
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* TOUR PLAN SECTION */}
                    <div className="border-t border-slate-800/80 pt-6">
                        <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center justify-between">
                            <span>📅 Tour Schedule Plan</span>
                            <button type="button" onClick={addDayField} className="bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black border border-amber-500/20 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition flex items-center gap-1">
                                <Add style={{ fontSize: '14px' }} /> Add Day
                            </button>
                        </h3>

                        <div className="space-y-6">
                            {formData.tourPlan.map((day, idx) => (
                                <div key={idx} className="bg-[#0b0f19] p-6 rounded-xl border border-slate-800 relative flex flex-col space-y-4">
                                    <button type="button" onClick={() => removeDayField(idx)} className="absolute top-4 right-4 text-slate-500 hover:text-red-400 transition">
                                        <Remove />
                                    </button>

                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                        <div className="w-24">
                                            <label className="text-xs text-slate-400 block mb-1">Day No</label>
                                            <input type="number" name="dayNumber" value={day.dayNumber} disabled className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-2 text-center text-amber-400 font-bold" />
                                        </div>
                                        <div className="flex-1 w-full">
                                            <label className="text-xs text-slate-400 block mb-1">Destination / Title</label>
                                            <input type="text" name="title" value={day.title} onChange={(e) => handleDayInputChange(idx, e)} required className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-2 outline-none text-sm focus:border-amber-500 transition" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                                        <div className="md:col-span-2">
                                            <label className="text-xs text-slate-400 block mb-1">Day Activity Description</label>
                                            <textarea name="description" value={day.description} onChange={(e) => handleDayInputChange(idx, e)} required rows="4" className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-2.5 outline-none text-sm resize-none focus:border-amber-500 transition" placeholder="Describe the activities for this day..."></textarea>
                                        </div>

                                        <div className="w-full">
                                            <label className="text-xs text-slate-400 block mb-1">Day Schedule Image</label>
                                            <div className="flex flex-col items-center justify-center bg-[#111726] p-4 rounded-lg border border-slate-800 h-[108px] relative group overflow-hidden">
                                                {day.dayImage ? (
                                                    <div className="absolute inset-0 w-full h-full">
                                                        <img src={day.dayImage} className="w-full h-full object-cover" alt="Preview" />
                                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-200">
                                                            <label className="cursor-pointer bg-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded shadow-md flex items-center gap-1">
                                                                <Image style={{ fontSize: '14px' }} /> Change
                                                                <input type="file" accept="image/*" onChange={(e) => handleDayImageUpload(idx, e)} className="hidden" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2.5 rounded-md flex flex-col items-center gap-1.5 transition border border-dashed border-slate-700 w-full text-center">
                                                        <Image style={{ fontSize: '18px', color: '#fbbf24' }} />
                                                        <span>Select Day Image</span>
                                                        <input type="file" accept="image/*" onChange={(e) => handleDayImageUpload(idx, e)} className="hidden" />
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FEATURED HOTELS SECTION */}
                    <div className="border-t border-slate-800/80 pt-6">
                        <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center justify-between">
                            <span>🏨 Selected Luxury Accommodations</span>
                            <button type="button" onClick={addHotelField} className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-black border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition flex items-center gap-1">
                                <Add style={{ fontSize: '14px' }} /> Add Hotel
                            </button>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formData.hotels.map((hotel, idx) => (
                                <div key={idx} className="bg-[#0b0f19] p-4 rounded-xl border border-slate-800 relative space-y-2">
                                    <button type="button" onClick={() => removeHotelField(idx)} className="absolute top-2 right-2 text-slate-500 hover:text-red-400 transition">
                                        <Remove />
                                    </button>
                                    <div>
                                        <label className="text-xs text-slate-400 block mb-0.5">Hotel Name</label>
                                        <input type="text" name="hotelName" value={hotel.hotelName} onChange={(e) => handleHotelInputChange(idx, e)} className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-1.5 outline-none text-sm" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-slate-400 block mb-0.5">Location</label>
                                        <input type="text" name="location" value={hotel.location} onChange={(e) => handleHotelInputChange(idx, e)} className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-1.5 outline-none text-sm" />
                                    </div>
                                    <div>
                                        <label className="text-xs text-slate-400 block mb-0.5">Hotel Description</label>
                                        <textarea name="hotelDesc" value={hotel.hotelDesc} onChange={(e) => handleHotelInputChange(idx, e)} rows="2" placeholder="Curated suite description..." className="w-full bg-[#111726] border border-slate-800 rounded-lg px-3 py-1.5 outline-none text-sm resize-none"></textarea>
                                    </div>
                                    <div>
                                        <label className="text-xs text-slate-400 block mb-0.5">Hotel Image</label>
                                        <div className="flex items-center gap-2 bg-[#111726] p-1 rounded-lg border border-slate-800">
                                            <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1 transition">
                                                <Image style={{ fontSize: '14px' }} /> Select Hotel Img
                                                <input type="file" accept="image/*" onChange={(e) => handleHotelImageUpload(idx, e)} className="hidden" />
                                            </label>
                                            {hotel.hotelImage && <img src={hotel.hotelImage} className="w-10 h-7 object-cover rounded" alt="Preview" />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 border-t border-slate-800/80 pt-6 justify-end">
                        {isEditing && (
                            <button type="button" onClick={resetForm} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl transition">
                                Cancel Edit
                            </button>
                        )}
                        <button type="submit" disabled={uploading} className={`px-8 py-3 font-bold uppercase text-xs tracking-widest rounded-xl transition shadow-lg ${uploading ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/10'}`}>
                            {uploading ? "Uploading Images..." : (isEditing ? "Update Itinerary" : "Publish Itinerary")}
                        </button>
                    </div>
                </form>

                {/* LIST OF ITINERARIES */}
                <div className="bg-[#111726] p-6 rounded-2xl border border-slate-800">
                    <h2 className="text-xl font-bold mb-6 text-slate-300">Existing Itineraries</h2>
                    {loading ? <p className="text-amber-400 italic">Loading database...</p> : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-400">
                                <thead className="bg-[#0b0f19] text-xs uppercase text-slate-300">
                                    <tr>
                                        <th className="px-4 py-3">Cover</th>
                                        <th className="px-4 py-3">Title</th>
                                        <th className="px-4 py-3">Category</th>
                                        <th className="px-4 py-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60">
                                    {itineraries.map((itinerary) => {
                                        const firstImg = itinerary.imageUrl ? itinerary.imageUrl.split(',')[0] : '';
                                        return (
                                            <tr key={itinerary._id} className="hover:bg-[#151c2e] transition">
                                                <td className="px-4 py-3">
                                                    <img src={firstImg} className="w-12 h-9 object-cover rounded bg-slate-900" alt="" />
                                                </td>
                                                <td className="px-4 py-3 text-white font-medium">{itinerary.title}</td>
                                                <td className="px-4 py-3 text-xs text-amber-400 font-semibold">{itinerary.category}</td>
                                                <td className="px-4 py-3 text-right space-x-2">
                                                    <button onClick={() => startEdit(itinerary)} className="p-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded hover:bg-blue-500 hover:text-white transition"><Edit style={{ fontSize: '16px' }} /></button>
                                                    <button onClick={() => deleteItinerary(itinerary._id)} className="p-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded hover:bg-red-500 hover:text-white transition"><Delete style={{ fontSize: '16px' }} /></button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminItinerary;