import React, { useState } from 'react';
import { sendEmailNotification } from '../utils/emailService'; // import email service 
import { 
    MessageSquare, Mail, Send, Sparkles, User, ShieldCheck 
} from 'lucide-react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    //  EmailJS 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Luxury Enquiry:", formData);
        
        //  e.target (HTML Form )  Template ID 
        const result = await sendEmailNotification(e.target, 'template_5o6c8ui');

        if (result.success) {
            alert("✨ Thank you! Your enquiry has been transmitted successfully.");
            // Form  clear 
            setFormData({ name: '', message: '' });
        } else {
            alert("❌ Transmission failed. Please try again or reach out directly via WhatsApp.");
        }
    };

    return (
        /*  Premium Deep Navy Slate Background */
        <div className="min-h-screen bg-[#0b111e] pt-32 pb-16 px-4 relative overflow-hidden font-sans">
            
            {/*  Luxury Radial Glow Ambient Lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Background Subtle Grid Pattern for Technical Elegance */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                
                {/*  Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-md animate-pulse">
                        <Sparkles size={14} className="text-emerald-400" />
                        Jai Lanka Concierge Desk
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight leading-none">
                        Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Travel Architects</span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Have questions regarding your bespoke Sri Lankan getaway? Reach out to us through your preferred channel or leave a quick message below.
                    </p>
                </div>

                {/*  2-Column Luxury Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/*  Left Side: Premium Contact Details Cards (5 Columns) */}
                    <div className="lg:col-span-5 space-y-5">
                        
                        {/* WhatsApp Card */}
                        <a 
                            href="https://wa.me/94740966449" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block group bg-[#131c2e]/40 backdrop-blur-xl rounded-3xl border border-white/[0.05] p-6 hover:border-emerald-500/30 hover:bg-[#131c2e]/70 transition-all duration-500 shadow-lg shadow-black/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/20">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Instant Chat</span>
                                    <h3 className="text-lg font-bold text-white tracking-wide">WhatsApp Concierge</h3>
                                    <p className="text-slate-400 text-sm font-mono">+94 74 096 6449</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400/80 mt-2 group-hover:translate-x-1 transition-transform duration-300">
                                        Message us now &rarr;
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a 
                            href="mailto:jailankatours@gmail.com"
                            className="block group bg-[#131c2e]/40 backdrop-blur-xl rounded-3xl border border-white/[0.05] p-6 hover:border-blue-500/30 hover:bg-[#131c2e]/70 transition-all duration-500 shadow-lg shadow-black/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500/10 p-4 rounded-2xl text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20">
                                    <Mail size={24} />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Official Channel</span>
                                    <h3 className="text-lg font-bold text-white tracking-wide">Email Relations</h3>
                                    <p className="text-slate-400 text-sm font-light">jailankatours@gmail.com</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400/80 mt-2 group-hover:translate-x-1 transition-transform duration-300">
                                        Send an email &rarr;
                                    </span>
                                </div>
                            </div>
                        </a>

                    </div>

                    {/*  Right Side: Glassmorphism Quick Message Form (7 Columns) */}
                    <div className="lg:col-span-7 bg-[#131c2e]/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/[0.07] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                            <div>
                                <h2 className="text-xs font-bold tracking-widest uppercase text-blue-400/80 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Drop Us A Line
                                </h2>
                                <p className="text-slate-400 text-xs font-light">Leave a quick note, and we will get back to you promptly.</p>
                            </div>

                            {/* Full Name Input */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                    <User size={14} className="text-blue-400" /> Full Name
                                </label>
                                <input 
                                    type="text" 
                                    name="from_name" // 💡 EmailJS  template variable
                                    value={formData.name}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setFormData(prev => ({ ...prev, name: e.target.value }));
                                    }}
                                    required
                                    placeholder="Your good name" 
                                    className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                                />
                                {/*  EmailJS {{name}}  hidden input  */}
                                <input type="hidden" name="name" value={formData.name} />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase ml-1">
                                    <MessageSquare size={14} className="text-blue-400" /> Your Message
                                </label>
                                <textarea 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4" 
                                    placeholder="How can our travel experts assist you today?" 
                                    className="w-full bg-[#1c2638]/50 border border-white/[0.05] rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none leading-relaxed"
                                />
                            </div>

                            {/* 🌟 Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:via-indigo-500 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-indigo-950/50 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                            >
                                <span className="text-xs uppercase tracking-[0.2em] font-black">Transmit Message</span>
                                <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-emerald-300" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center flex items-center justify-center gap-2 text-slate-500 text-xs tracking-wide">
                    <ShieldCheck size={14} className="text-emerald-500/70" />
                    Your data is handled securely. Response guaranteed within <span className="text-blue-400/80 font-medium">24 business hours</span>.
                </div>

            </div>
        </div>
    );
};

export default Enquiry;