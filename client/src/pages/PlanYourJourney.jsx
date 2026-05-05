import React, { useState } from 'react';

const PlanYourJourney = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        passengers: 1,
        duration: '',
        interests: [],
        message: ''
    });

    const categories = ['Nature', 'Wildlife', 'Adventure', 'Beach', 'Culture', 'History'];

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 font-body">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-slate-900 py-10 px-8 text-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Tailor-Made Journey</h1>
                    <p className="text-slate-400">Tell us your travel dreams, and we'll make them a reality.</p>
                </div>

                <form className="p-8 md:p-12 space-y-8">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                    </div>

                    {/* Trip Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">No. of Passengers</label>
                            <input type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Days)</label>
                            <input type="text" placeholder="e.g. 10 Days" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-4">What interests you most?</label>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => handleInterestChange(item)}
                                    className={`px-6 py-2 rounded-full border transition-all ${
                                        formData.interests.includes(item)
                                            ? 'bg-blue-600 border-blue-600 text-white'
                                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-500'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Anything else we should know?</label>
                        <textarea rows="4" placeholder="Mention special requirements or specific places you want to visit..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.01]">
                        Send My Plan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PlanYourJourney;