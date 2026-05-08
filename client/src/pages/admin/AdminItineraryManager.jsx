import React, { useState } from 'react';
import { 
  FaPlus, FaTrash, FaMapMarkerAlt, FaHotel, FaCalendarDay, 
  FaImage, FaListUl, FaSave, FaTimes 
} from 'react-icons/fa';

const AdminItineraryManager = () => {
  // Main Itinerary State
  const [itinerary, setItinerary] = useState({
    title: '',
    category: '',
    duration: '',
    description: '',
    imageUrl: '',
    mapUrl: '',
    tourPlan: [], // Days data
    hotels: []    // Hotels data
  });

  // Temporary states for adding sub-items
  const [newDay, setNewDay] = useState({ day: '', title: '', activities: '', images: '' });
  const [newHotel, setNewHotel] = useState({ name: '', desc: '', longDesc: '', img: '', amenities: '', hotelMap: '' });

  // --- Handlers for Main Fields ---
  const handleChange = (e) => {
    setItinerary({ ...itinerary, [e.target.name]: e.target.value });
  };

  // --- Handlers for Tour Plan (Days) ---
  const addDay = () => {
    if (!newDay.day || !newDay.title) return;
    const dayObj = {
      ...newDay,
      activities: newDay.activities.split(',').map(a => a.trim()), // කමා වලින් වෙන් කර Array එකක් කරයි
      images: newDay.images.split(',').map(i => i.trim())
    };
    setItinerary({ ...itinerary, tourPlan: [...itinerary.tourPlan, dayObj] });
    setNewDay({ day: '', title: '', activities: '', images: '' });
  };

  const deleteDay = (index) => {
    const updatedPlan = itinerary.tourPlan.filter((_, i) => i !== index);
    setItinerary({ ...itinerary, tourPlan: updatedPlan });
  };

  // --- Handlers for Hotels ---
  const addHotel = () => {
    if (!newHotel.name || !newHotel.img) return;
    const hotelObj = {
      ...newHotel,
      amenities: newHotel.amenities.split(',').map(a => a.trim())
    };
    setItinerary({ ...itinerary, hotels: [...itinerary.hotels, hotelObj] });
    setNewHotel({ name: '', desc: '', longDesc: '', img: '', amenities: '', hotelMap: '' });
  };

  const deleteHotel = (index) => {
    const updatedHotels = itinerary.hotels.filter((_, i) => i !== index);
    setItinerary({ ...itinerary, hotels: updatedHotels });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/itineraries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itinerary),
      });
      if (response.ok) {
        alert("Itinerary Saved Successfully!");
        setItinerary({
          title: '',
          category: '',
          duration: '',
          description: '',
          imageUrl: '',
          mapUrl: '',
          tourPlan: [],
          hotels: []
        });
      } else {
        alert("Failed to save itinerary");
      }
    } catch (err) {
      console.error("Error saving itinerary:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-[#1a1c2e] min-h-screen text-slate-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FaPlus className="text-[#ff5e57]" /> Create New Itinerary
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Basic Card Details */}
          <div className="bg-[#141625] p-6 rounded-[32px] border border-slate-800 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-3">1. Basic Card Info (Itinerary List Page)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="title" onChange={handleChange} placeholder="Itinerary Title (e.g. Cultural Odyssey)" className="admin-input" />
              <input name="category" onChange={handleChange} placeholder="Category (e.g. CULTURAL TOURS)" className="admin-input" />
              <input name="duration" onChange={handleChange} placeholder="Duration (e.g. 08 Nights & 09 Days)" className="admin-input" />
              <input name="imageUrl" onChange={handleChange} placeholder="Main Card Image URL" className="admin-input" />
              <input name="mapUrl" onChange={handleChange} placeholder="Google Map Embed URL (for Route Map)" className="admin-input md:col-span-2" />
              <textarea name="description" onChange={handleChange} placeholder="Short Description for Card" className="admin-input md:col-span-2 h-24" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 2. Detailed Tour Plan (Days) */}
            <div className="bg-[#141625] p-6 rounded-[32px] border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaCalendarDay className="text-blue-400" /> 2. Add Tour Plan (Days)
              </h2>
              
              <div className="space-y-4 bg-[#1f213a] p-4 rounded-2xl mb-6 border border-slate-700">
                <div className="grid grid-cols-4 gap-2">
                  <input value={newDay.day} onChange={(e) => setNewDay({...newDay, day: e.target.value})} placeholder="Day #" className="admin-input col-span-1" />
                  <input value={newDay.title} onChange={(e) => setNewDay({...newDay, title: e.target.value})} placeholder="Day Title" className="admin-input col-span-3" />
                </div>
                <textarea value={newDay.activities} onChange={(e) => setNewDay({...newDay, activities: e.target.value})} placeholder="Activities (Separate with commas)" className="admin-input h-20" />
                <input value={newDay.images} onChange={(e) => setNewDay({...newDay, images: e.target.value})} placeholder="Image URLs (Separate with commas)" className="admin-input" />
                <button type="button" onClick={addDay} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                  <FaPlus size={12} /> Add Day to Plan
                </button>
              </div>

              {/* Added Days List */}
              <div className="space-y-3">
                {itinerary.tourPlan.map((d, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#141625] border border-slate-800 p-4 rounded-xl">
                    <div>
                      <span className="text-blue-400 font-bold text-xs uppercase">Day {d.day}</span>
                      <h4 className="text-white text-sm font-semibold">{d.title}</h4>
                    </div>
                    <button onClick={() => deleteDay(idx)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all"><FaTrash /></button>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Hotels / Accommodations */}
            <div className="bg-[#141625] p-6 rounded-[32px] border border-slate-800">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaHotel className="text-emerald-400" /> 3. Add Accommodations
              </h2>

              <div className="space-y-4 bg-[#1f213a] p-4 rounded-2xl mb-6 border border-slate-700">
                <input value={newHotel.name} onChange={(e) => setNewHotel({...newHotel, name: e.target.value})} placeholder="Hotel Name" className="admin-input" />
                <input value={newHotel.img} onChange={(e) => setNewHotel({...newHotel, img: e.target.value})} placeholder="Hotel Image URL" className="admin-input" />
                <input value={newHotel.desc} onChange={(e) => setNewHotel({...newHotel, desc: e.target.value})} placeholder="Short Description (2 lines)" className="admin-input" />
                <textarea value={newHotel.longDesc} onChange={(e) => setNewHotel({...newHotel, longDesc: e.target.value})} placeholder="Detailed Description (for Modal)" className="admin-input h-20" />
                <input value={newHotel.amenities} onChange={(e) => setNewHotel({...newHotel, amenities: e.target.value})} placeholder="Amenities (Separate with commas)" className="admin-input" />
                <input value={newHotel.hotelMap} onChange={(e) => setNewHotel({...newHotel, hotelMap: e.target.value})} placeholder="Hotel Map URL" className="admin-input" />
                <button type="button" onClick={addHotel} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                  <FaPlus size={12} /> Add Hotel
                </button>
              </div>

              {/* Added Hotels List */}
              <div className="space-y-3">
                {itinerary.hotels.map((h, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#141625] border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <img src={h.img} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <h4 className="text-white text-sm font-semibold">{h.name}</h4>
                    </div>
                    <button onClick={() => deleteHotel(idx)} className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition-all"><FaTrash /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Full Itinerary */}
          <button type="submit" className="w-full bg-[#ff5e57] hover:bg-[#ff473d] text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-[#ff5e5733] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3">
            <FaSave /> SAVE FULL ITINERARY TO DATABASE
          </button>
        </form>
      </div>

      {/* Internal CSS for Inputs */}
      <style jsx>{`
        .admin-input {
          width: 100%;
          background: #141625;
          border: 1px solid #2d2f45;
          border-radius: 12px;
          padding: 12px 16px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: border 0.3s;
        }
        .admin-input:focus {
          border-color: #ff5e57;
        }
      `}</style>
    </div>
  );
};

export default AdminItineraryManager;