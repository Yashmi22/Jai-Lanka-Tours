import React, { useState } from 'react';
import { 
  User, Mail, Users, Calendar, 
  MapPin, Send, Compass, Sparkles 
} from 'lucide-react';

const PlanYourJourney = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        passengers: 1,
        duration: '',
        interests: [],
        message: ''
    });

    const categories = [
        { name: 'Nature', icon: '🌿' },
        { name: 'Wildlife', icon: '🐘' },
        { name: 'Adventure', icon: '🧗' },
        { name: 'Beach', icon: '🌊' },
        { name: 'Culture', icon: '🛕' },
        { name: 'History', icon: '📜' }
    ];

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    return (
        <div className="min-h-screen bg-[#e7e9ec] pt-24 pb-12 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <Sparkles size={16} />
                        Your Dream Trip Starts Here
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Tailor-Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Journey</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Share your travel dreams with us, and our experts will craft a unique Sri Lankan experience just for you.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
                    <form className="p-8 md:p-12 space-y-10">
                        
                        {/* Section 1: Travelers Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                    <User size={16} className="text-blue-400" /> Full Name
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. John Doe" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                    <Mail size={16} className="text-blue-400" /> Email Address
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        {/* Section 2: Trip Dynamics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                    <Users size={16} className="text-emerald-400" /> No. of Passengers
                                </label>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        min="1" 
                                        defaultValue="1"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all shadow-inner"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                    <Calendar size={16} className="text-emerald-400" /> Duration (Days)
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. 10 Days" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all shadow-inner"
                                />
                            </div>
                        </div>

                        {/* Section 3: Interests (The Fun Part) */}
                        <div className="space-y-4">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                <Compass size={16} className="text-orange-400" /> What sparks your interest?
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                {categories.map((item) => (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => handleInterestChange(item.name)}
                                        className={`group relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                                            formData.interests.includes(item.name)
                                                ? 'bg-gradient-to-b from-blue-500 to-blue-600 border-blue-400 text-white scale-95 shadow-lg shadow-blue-500/20'
                                                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/10'
                                        }`}
                                    >
                                        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Section 4: Message */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-1">
                                <MapPin size={16} className="text-red-400" /> Any specific places or needs?
                            </label>
                            <textarea 
                                rows="4" 
                                placeholder="I want to see Sigiriya, go surfing in Arugam Bay, and I need a vegetarian meal plan..." 
                                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="text-lg uppercase tracking-widest">Craft My Experience</span>
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center text-slate-500 text-sm">
                    Our travel experts usually respond within <span className="text-blue-400 font-medium">24 hours</span>.
                </div>
            </div>
        </div>
    );
};

export default PlanYourJourney;