import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import api from '../api';

const normalizeImageList = (value) => {
    if (!value) return [];

    if (Array.isArray(value)) {
        return value
            .map((item) => (typeof item === 'string' ? item.trim() : ''))
            .filter(Boolean);
    }

    if (typeof value === 'string') {
        return value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);
    }

    return [];
};

const getPrimaryImage = (itinerary) => {
    const collected = [];

    const addImage = (image) => {
        const normalized = typeof image === 'string' ? image.trim() : '';
        if (normalized && !collected.includes(normalized)) {
            collected.push(normalized);
        }
    };

    normalizeImageList(itinerary?.imageUrl || itinerary?.images || itinerary?.image).forEach(addImage);

    if (Array.isArray(itinerary?.tourPlan)) {
        itinerary.tourPlan.forEach((day) => {
            normalizeImageList(day?.images || day?.imageUrl || day?.image || day?.img || day?.dayImage).forEach(addImage);
        });
    }

    return collected[0] || 'https://via.placeholder.com/400x300?text=No+Image';
};

const Itineraries = ({ categoryFilter = "All" }) => {
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                setLoading(true); 
                const res = await api.get('/itineraries');
                
                console.log("Database Data:", res.data); // Troubleshooting
                console.log("Current categoryFilter value:", categoryFilter); 
                console.log("Type of categoryFilter:", typeof categoryFilter); 

                if (categoryFilter === "All") {
                    setItineraries(res.data);
                } else {
                    const filtered = res.data.filter(item => {
                        if (!item.category) return false;

                        const dbCategory = item.category.trim().toLowerCase();
                        const filterCategory = categoryFilter.trim().toLowerCase();

                        if (filterCategory.includes("off road") && dbCategory.includes("adventure and nature")) {
                            return true; 
                        }

                        return dbCategory === filterCategory || 
                               dbCategory.includes(filterCategory) || 
                               filterCategory.includes(dbCategory);
                    });
                    setItineraries(filtered);
                }
            } catch (err) {
                console.error("Error fetching itineraries", err);
            } finally {
                setLoading(false); 
            }
        };
        
        fetchItineraries();
    }, [categoryFilter]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] font-serif italic text-xl text-amber-400/70">
                Loading...
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#0b0f19] font-body text-slate-100 antialiased pb-24">
            
            {/* --- 1. HIGH-END HERO BANNER --- */}
            <div className="relative pt-32 pb-16 px-6 text-center overflow-hidden border-b border-yellow-600/20 bg-gradient-to-b from-[#060a13] via-[#0b1220] to-[#0b0f19]">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-950/40 border border-amber-600/30 px-5 py-2 rounded-full mb-4 inline-block">
                        Bespoke Ceylon Expeditions
                    </span>
                    <h1 className="text-4xl md:text-5xl font-headline font-light text-white tracking-wide uppercase mt-2">
                        {categoryFilter === "All" ? "All Itineraries" : `${categoryFilter} `}
                        <span className="font-serif italic text-amber-400">
                            {categoryFilter === "All" ? "" : " "}
                        </span>
                    </h1>
                </div>
            </div>

            {/* --- 2. CARDS GRID SECTION --- */}
            <main className="max-w-7xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {itineraries.length > 0 ? itineraries.map((item, index) => (
                        <motion.div 
                            key={item._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col group cursor-pointer bg-[#111726] rounded-2xl overflow-hidden border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
                            onClick={() => navigate(`/itinerary/${item._id}`)}
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[100%] group-hover:brightness-[110%]" 
                                    /* 🔄 මෙන්න වෙනස් කරපු ප්‍රධානම තැන: 
                                      imageUrl එක Comma වලින් split කරලා [0] මඟින් පළවෙනි පින්තූරය විතරක් ගන්නවා.
                                      හිස්තැන් තිබුණොත් අයින් වෙන්න .trim() කරලා තියෙනවා.
                                    */
                                    src={getPrimaryImage(item)} 
                                    alt={item.title} 
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111726]/30 via-transparent to-transparent"></div>
                                
                                {/* Days Badge */}
                                <div className="absolute top-4 right-4 bg-[#0b0f19]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-amber-500/20 shadow-lg">
                                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                                        {item.tag || "Premium Tour"}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content Body */}
                            <div className="p-6 flex flex-col justify-between flex-grow text-center">
                                <div>
                                    {/* Category Subtitle */}
                                    <p className="text-[9px] uppercase tracking-widest text-amber-400/80 font-bold mb-2">
                                        {item.category || "Signature Tour"}
                                    </p>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-headline font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight min-h-[3.5rem] line-clamp-2">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description (Fixed with break-words) */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 italic font-light px-2 break-words w-full">
                                        "{item.description}"
                                    </p>
                                </div>

                                {/* Bottom Button */}
                                <div className="pt-4 border-t border-slate-800/50 mt-auto">
                                    <button className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border border-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 shadow-sm w-full">
                                        Details <ArrowForward className="ml-2 !text-[14px]" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )) : (
                        <div className="col-span-full text-center py-24 text-slate-500 italic font-serif">
                            No premium itineraries found for this category.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Itineraries;