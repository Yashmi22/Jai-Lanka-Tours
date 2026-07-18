import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('https://jai-lanka-tours-production.up.railway.app/api/packages/add', {
                name, price, description
            });
            alert("සාර්ථකව ඇතුළත් කළා!");
            setName(""); setPrice(""); setDescription(""); // Form  clear 
        } catch (err) {
            console.error("Error:", err);
            alert("දත්ත ඇතුළත් කිරීම අසාර්ථකයි!");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-body">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Admin Dashboard
                    <span className="block text-sm font-normal text-slate-500 mt-1">Add New Travel Package</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Package Name</label>
                        <input 
                            type="text" 
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="e.g. Sigiriya Day Tour"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Price (USD)</label>
                        <input 
                            type="number" 
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                            placeholder="50"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                        <textarea 
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition h-32"
                            placeholder="Tell more about the tour..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${loading ? 'bg-slate-400' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'}`}
                    >
                        {loading ? "Saving..." : "Add Package"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;