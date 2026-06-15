import React, { useState } from 'react';
import { 
  User, Mail, Users, Calendar, 
  MapPin, Send, Compass, Sparkles, AlertCircle, Phone
} from 'lucide-react';

const PlanYourJourney = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactMethod: 'email', // Default contact method එක email ලෙස සකසා ඇත
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'passengers' ? (parseInt(value) || 1) : value
        }));
    };

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Luxury Plan:", formData);
        
        // WhatsApp හෝ Email අනුව බිස්නස් logic එක මෙතනින් හැසිරවිය හැක:
        if (formData.contactMethod === 'whatsapp') {
            // WhatsApp එකට විස්තර යැවීමට අවශ්‍ය නම් (Direct WhatsApp redirection)
            const whatsappText = `Hi! I'm planning a journey.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Companions:* ${formData.passengers}%0A*Duration:* ${formData.duration}%0A*Interests:* ${formData.interests.join(', ')}%0A*Preferences:* ${formData.message}`;
            window.open(`https://wa.me/94771234567?text=${whatsappText}`, '_blank'); // 94771234567 වෙනුවට ඔයාගේ WhatsApp අංකය දාන්න
        } else {
            // Backend API (Email) එකකට විස්තර යැවීමට (axios.post) මෙතනින් පුළුවන්
            alert("Thank you! Your itinerary request has been submitted via Email.");
        }
    };

    return (
        /* 🌌 Premium Deep Navy Slate Background */
        <div className="min-h-screen bg-[#0b111e] pt-32 pb-16 px-4 relative overflow-hidden font-sans">
            
            {/* ✨ Luxury Radial Glow Ambient Lights */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Background Subtle Grid Pattern for Technical Elegance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                
                {/* 👑 Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-md animate-pulse">
                        <Sparkles size={14} className="text-emerald-400" />
                        Bespoke Sri Lankan Itineraries
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight leading-none">
                        Craft Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Elite Journey</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Tell us your travel aspirations. Our destination connoisseurs will orchestrate an ultra-personalized Sri Lankan experience tailored exclusively for you.
                    </p>
                </div>

                {/* 💎 Glassmorphism Form Container */}
                <div className="bg-[#131c2e]/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/[0.07] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 md:p-14 space-y-10">
                        
                        {/* 👤 Section 1: Guest Profile */}
                        <div>
                            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-400/80 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> 01. Guest Profile
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                        <User size={14} className="text-blue-400" /> Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Honorable Guest" 
                                        className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                        <Mail size={14} className="text-blue-400" /> Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="guest@luxury.com" 
                                        className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* 🌐 Preferred Contact Method (WhatsApp / Email Choice) */}
                            <div className="mt-6 space-y-3">
                                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                    How should we contact you?
                                </label>
                                <div className="flex flex-wrap gap-4">
                                    <label className={`flex items-center gap-3 px-5 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.contactMethod === 'email' ? 'bg-blue-500/10 border-blue-500/40 text-blue-400' : 'bg-[#1c2638]/30 border-white/[0.05] text-slate-400 hover:text-white'}`}>
                                        <input 
                                            type="radio" 
                                            name="contactMethod" 
                                            value="email" 
                                            checked={formData.contactMethod === 'email'}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <Mail size={16} />
                                        <span className="text-sm font-medium tracking-wide">Via Email</span>
                                    </label>

                                    <label className={`flex items-center gap-3 px-5 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${formData.contactMethod === 'whatsapp' ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-[#1c2638]/30 border-white/[0.05] text-slate-400 hover:text-white'}`}>
                                        <input 
                                            type="radio" 
                                            name="contactMethod" 
                                            value="whatsapp" 
                                            checked={formData.contactMethod === 'whatsapp'}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <Phone size={16} />
                                        <span className="text-sm font-medium tracking-wide">Via WhatsApp</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* ⏳ Section 2: Journey Dynamics */}
                        <div>
                            <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400/80 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 02. Voyage Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                        <Users size={14} className="text-emerald-400" /> Number of Companions
                                    </label>
                                    <input 
                                        type="number" 
                                        name="passengers"
                                        min="1" 
                                        value={formData.passengers}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                        <Calendar size={14} className="text-emerald-400" /> Intended Duration
                                    </label>
                                    <input 
                                        type="text" 
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        placeholder="e.g. 14 Bespoke Days" 
                                        className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 🧭 Section 3: Curated Passions */}
                        <div>
                            <h2 className="text-xs font-bold tracking-widest uppercase text-indigo-400/80 mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> 03. Select Curated Passions
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {categories.map((item) => {
                                    const isSelected = formData.interests.includes(item.name);
                                    return (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => handleInterestChange(item.name)}
                                            className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                                                isSelected
                                                    ? 'bg-gradient-to-b from-indigo-600 to-blue-600 border-indigo-400 text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.4)] scale-[0.98]'
                                                    : 'bg-[#1c2638]/30 border-white/[0.04] text-slate-400 hover:border-white/[0.15] hover:bg-[#1c2638]/70 hover:text-white'
                                            }`}
                                        >
                                            {/* Top Subtle indicator for selected state */}
                                            {isSelected && (
                                                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                            )}
                                            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 🗺️ Section 4: Special Connoisseur Requests */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                <MapPin size={14} className="text-rose-400" /> Bespoke Requirements & Preferences
                            </label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4" 
                                placeholder="E.g., Private helicopter transfers, staying at luxury boutique villas, dedicated tea tasting tours, or specific dietary preferences..." 
                                className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none leading-relaxed"
                            />
                        </div>

                        {/* 🌟 Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:via-indigo-500 hover:to-emerald-500 text-white font-bold py-5 rounded-xl shadow-xl shadow-indigo-950/50 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        >
                            <span className="text-xs uppercase tracking-[0.2em] font-black">
                                {formData.contactMethod === 'whatsapp' ? 'Submit via WhatsApp' : 'Submit & Plan My Journey'}
                            </span>
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-emerald-300" />
                        </button>
                    </form>
                </div>

                {/* Footer Note */}
                <div className="mt-10 text-center flex items-center justify-center gap-2 text-slate-500 text-xs tracking-wide">
                    <AlertCircle size={14} className="text-slate-600" />
                    Our luxury travel architects respond with a customized proposal within <span className="text-blue-400/80 font-medium">24 hours</span>.
                </div>
            </div>
        </div>
    );
};

export default PlanYourJourney;