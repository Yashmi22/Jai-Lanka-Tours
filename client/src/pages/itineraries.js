import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

// මෙහි 'categoryFilter' ලෙස ගන්නේ Navbar එකෙන් එවන category නමයි
const Itineraries = ({ categoryFilter = "All" }) => {
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/itineraries');
                // මෙතනදී category එක අනුව filter කරනවා
                if (categoryFilter === "All") {
                    setItineraries(res.data);
                } else {
                    const filtered = res.data.filter(item => item.category === categoryFilter);
                    setItineraries(filtered);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching itineraries", err);
                setLoading(false);
            }
        };
        fetchItineraries();
    }, [categoryFilter]); // Category එක වෙනස් වෙද්දී පේජ් එක update වෙනවා

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#1a1c1e] antialiased">
            <header className="py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-4">
                    {categoryFilter === "All" ? "All Itineraries" : `${categoryFilter} Tours`}
                </h1>
                <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {itineraries.length > 0 ? itineraries.map((item, index) => (
                        <motion.div 
                            key={item._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col group cursor-pointer"
                            onClick={() => navigate(`/itinerary/${item._id}`)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.imageUrl} alt={item.title} />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-sky-800 uppercase tracking-wider shadow-sm">
                                    {item.days} Days
                                </div>
                            </div>

                            <div className="text-center px-2">
                                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors leading-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 italic">"{item.description}"</p>
                                <button className="inline-flex items-center justify-center px-8 py-2.5 bg-sky-500 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-sky-600 transition-all shadow-md">
                                    Details <ArrowForward className="ml-2 !text-[14px]" />
                                </button>
                            </div>
                        </motion.div>
                    )) : (
                        <div className="col-span-full text-center py-20 text-slate-400">
                            No itineraries found for this category.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Itineraries;