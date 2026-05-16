import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaSuitcase, FaMapMarkedAlt, FaHotel, FaTrash } from 'react-icons/fa';

const AdminItineraryManager = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Cultural', 
        duration: '',
        description: '',
        imageUrl: '',
        mapUrl: '',
        accommodation: {
            name: '',
            location: '',
            description: '',
            pricePerNight: '',
            imageUrl: '',
            rating: '',
            amenities: ''
        }
    });

    const [tourPlan, setTourPlan] = useState([{ day: 1, title: '', activities: '', images: '' }]);
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(false);

    const categories = ['Cultural', 'Adventure', 'Nature', 'Honeymoon', 'Wild Life'];

    useEffect(() => {
        fetchItineraries();
    }, []);

    const fetchItineraries = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:5000/api/itineraries');
            setItineraries(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching itineraries:', err);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAccommodationChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            accommodation: {
                ...formData.accommodation,
                [name]: value
            }
        });
    };

    const addDay = () => {
        setTourPlan([...tourPlan, { day: tourPlan.length + 1, title: '', activities: '', images: '' }]);
    };

    const handlePlanChange = (index, field, value) => {
        const updatedPlan = [...tourPlan];
        updatedPlan[index][field] = value;
        setTourPlan(updatedPlan);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formattedTourPlan = tourPlan.map(item => ({
                ...item,
                activities: typeof item.activities === 'string' ? item.activities.split(',').map(a => a.trim()) : item.activities,
                images: typeof item.images === 'string' ? item.images.split(',').map(i => i.trim()) : item.images
            }));

            const formattedAccommodation = {
                ...formData.accommodation,
                amenities: typeof formData.accommodation.amenities === 'string' 
                    ? formData.accommodation.amenities.split(',').map(a => a.trim()) 
                    : formData.accommodation.amenities
            };

            const finalData = { 
                ...formData, 
                tourPlan: formattedTourPlan,
                accommodation: formattedAccommodation
            };
            
            await axios.post('http://127.0.0.1:5000/api/itineraries', finalData);
            alert('Itinerary with Accommodation Added Successfully!');
            
            // Clear Form
            setFormData({ 
                title: '', 
                category: 'Cultural', 
                duration: '', 
                description: '', 
                imageUrl: '', 
                mapUrl: '',
                accommodation: {
                    name: '',
                    location: '',
                    description: '',
                    pricePerNight: '',
                    imageUrl: '',
                    rating: '',
                    amenities: ''
                }
            });
            setTourPlan([{ day: 1, title: '', activities: '', images: '' }]);
            fetchItineraries();
        } catch (err) {
            alert('Error adding itinerary. Check if your backend is running.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this itinerary?')) {
            try {
                const response = await axios.delete(`http://127.0.0.1:5000/api/itineraries/${id}`);
                alert('Itinerary deleted successfully!');
                fetchItineraries();
            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || 'Error deleting itinerary';
                alert(`Error: ${errorMessage}. Please try again.`);
                console.error('Delete error:', err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto">
                {/* Manage Itineraries Section */}
                <div className="bg-white p-10 rounded-[40px] shadow-lg mb-8">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><FaSuitcase className="text-red-600"/> Manage Itineraries</h2>
                    
                    {loading ? (
                        <p className="text-gray-500">Loading itineraries...</p>
                    ) : itineraries.length === 0 ? (
                        <p className="text-gray-500">No itineraries found. Create one below!</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="text-left p-4">Title</th>
                                        <th className="text-left p-4">Category</th>
                                        <th className="text-left p-4">Duration</th>
                                        <th className="text-left p-4">Accommodation</th>
                                        <th className="text-center p-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itineraries.map((itinerary) => (
                                        <tr key={itinerary._id} className="border-b hover:bg-gray-50">
                                            <td className="p-4">{itinerary.title}</td>
                                            <td className="p-4">{itinerary.category}</td>
                                            <td className="p-4">{itinerary.duration}</td>
                                            <td className="p-4">{itinerary.accommodation?.name || '-'}</td>
                                            <td className="p-4 text-center">
                                                <button
                                                    onClick={() => handleDelete(itinerary._id)}
                                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2 justify-center w-full"
                                                >
                                                    <FaTrash size={14} /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Add New Itinerary Section */}
                <div className="bg-white p-10 rounded-[40px] shadow-lg">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><FaPlus className="text-blue-600"/> Add New Itinerary</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="title" placeholder="Tour Title" value={formData.title} onChange={handleChange} className="p-4 border rounded-2xl" required />
                        <select name="category" value={formData.category} onChange={handleChange} className="p-4 border rounded-2xl bg-white">
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <input name="duration" placeholder="Duration (Ex: 5 Days)" value={formData.duration} onChange={handleChange} className="p-4 border rounded-2xl" required />
                        <input name="imageUrl" placeholder="Main Image URL" value={formData.imageUrl} onChange={handleChange} className="p-4 border rounded-2xl" />
                        <input name="mapUrl" placeholder="Map Image or Iframe URL" value={formData.mapUrl} onChange={handleChange} className="p-4 border rounded-2xl md:col-span-2" />
                    </div>

                    {/* Accommodation Section */}
                    <div className="mt-10 p-6 border-2 border-blue-300 rounded-3xl bg-blue-50">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FaHotel className="text-blue-600"/> Accommodation Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                                name="name" 
                                placeholder="Hotel/Resort Name" 
                                value={formData.accommodation.name} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl" 
                            />
                            <input 
                                name="location" 
                                placeholder="Location (City/Area)" 
                                value={formData.accommodation.location} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl" 
                            />
                            <input 
                                name="pricePerNight" 
                                placeholder="Price Per Night (USD)" 
                                type="number" 
                                value={formData.accommodation.pricePerNight} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl" 
                            />
                            <input 
                                name="rating" 
                                placeholder="Rating (0-5)" 
                                type="number" 
                                step="0.1"
                                min="0"
                                max="5"
                                value={formData.accommodation.rating} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl" 
                            />
                            <input 
                                name="imageUrl" 
                                placeholder="Hotel Image URL" 
                                value={formData.accommodation.imageUrl} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl md:col-span-2" 
                            />
                            <textarea 
                                name="description" 
                                placeholder="Accommodation Description" 
                                value={formData.accommodation.description} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl md:col-span-2" 
                                rows="3"
                            />
                            <input 
                                name="amenities" 
                                placeholder="Amenities (comma separated: WiFi, Pool, Parking, etc.)" 
                                value={formData.accommodation.amenities} 
                                onChange={handleAccommodationChange} 
                                className="p-3 border rounded-xl md:col-span-2" 
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FaMapMarkedAlt/> Tour Plan Steps</h3>
                        {tourPlan.map((plan, index) => (
                            <div key={index} className="p-6 border rounded-3xl mb-4 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p className="font-bold text-blue-600 md:col-span-2">Day {plan.day}</p>
                                <input placeholder="Step Title" value={plan.title} onChange={(e) => handlePlanChange(index, 'title', e.target.value)} className="p-3 border rounded-xl" />
                                <input placeholder="Activities (comma separated)" value={plan.activities} onChange={(e) => handlePlanChange(index, 'activities', e.target.value)} className="p-3 border rounded-xl" />
                                <input placeholder="Step Images (comma separated URLs)" value={plan.images} onChange={(e) => handlePlanChange(index, 'images', e.target.value)} className="p-3 border rounded-xl md:col-span-2" />
                            </div>
                        ))}
                        <button type="button" onClick={addDay} className="bg-slate-800 text-white px-6 py-3 rounded-2xl">+ Add Next Day</button>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg mt-8">Publish Tour</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AdminItineraryManager;