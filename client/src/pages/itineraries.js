import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Place, ArrowForward, AccessTime, Schedule, Castle, TempleHindu, LocalFlorist, Photoramone, LocationOn } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const Itineraries = () => {
    // Backend එකෙන් itineraries data ගබඩා කිරීමට state එක
    const [itineraries, setItineraries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    // API එකෙන් data ලබා ගැනීම (MERN Backend සම්බන්ධ කිරීම)
   useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/itineraries'); 
                setItineraries(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching itineraries", err);
                setLoading(false);
            }
        };
        fetchItineraries();
    }, []);

    // Placeholder Data (Backend එක වැඩ කරනකම් පාවිච්චි කරන්න - Image එකේ තියෙන data මයි)
    const placeholderData = [
        {
            _id: '1',
            title: 'Scenic Highland Railway',
            description: 'A captivating blue train ride winding through misty mountains, lush tea estates, and historical tunnels of Ella.',
            imageUrl: 'https://images.unsplash.com/photo-1552423116-2fd1b22e1176?q=80&w=1000', // Unsplash fixed link
            days: 7,
            category: 'Highlands'
        },
        {
            _id: '2',
            title: 'Southern Coast Adventure',
            description: 'Surf the waves, dive into turquoise waters, and explore the golden beaches of Weligama and Mirissa.',
            imageUrl: 'https://images.unsplash.com/photo-1565019053022-133077e0136d?q=80&w=1000', // Unsplash fixed link
            days: 5,
            category: 'Beach'
        },
        {
            _id: '3',
            title: 'Wild Sri Lanka Safari',
            description: 'Embark on an epic wildlife safari to spot elusive leopards, elephants, and rare birds in Yala National Park.',
            imageUrl: 'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1000', // Unsplash fixed link
            days: 8,
            category: 'Wildlife'
        },
        {
            _id: '4',
            title: 'Ancient Capitals and Culture',
            description: 'Step back in time to explore the ruins of Sigiriya Rock Fortress, sacred temples of Kandy, and historical cities.',
            imageUrl: 'https://images.unsplash.com/photo-1588598116712-2323e449c25f?q=80&w=1000', // Unsplash fixed link
            days: 10,
            category: 'Culture'
        }
    ];

    // Backend එකේ data නැත්නම් placeholder data පාවිච්චි කරයි
    const displayData = itineraries.length > 0 ? itineraries : placeholderData;

    return (
        <div className="bg-slate-50 font-sans text-slate-900">
            {/* Navbar from App.js */}
            <Navbar />

            <main className="pt-0 pb-20">
                {/* Hero Section - Image එකේ තියෙන Sigiriya Background එක */}
                <section className="relative h-[550px] flex items-center justify-center overflow-hidden mb-20 shadow-lg">
                    <div className="absolute inset-0 z-0">
                        <img 
                            className="w-full h-full object-cover" 
                            src="https://images.unsplash.com/photo-1610419262174-8f0a0c9c4883?q=80&w=2070" // Unsplash Sigiriya fixed link
                            alt="Explore Jai Lanka" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-slate-50"></div>
                    </div>
                    <div className="relative z-10 text-center px-6">
                        <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-800 rounded-full text-sm font-semibold mb-5">Premium Travel Curators</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-sky-950 mb-6 leading-tight drop-shadow-md">Explore Jai Lanka,<br /> Your Personalized Journey</h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-800 leading-relaxed font-medium">Discover the authentic beauty, culture, and nature of the island through our expertly crafted itineraries.</p>
                    </div>
                </section>

                {/* Itinerary Grid - Image එකේ තියෙන ආකාරයට Card layout එක */}
                <section className="max-w-screen-2xl mx-auto px-12 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                        {displayData.map((item) => (
                            <div key={item._id} className="bg-white rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                        src={item.imageUrl} 
                                        alt={item.title} 
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-sky-900 shadow">{item.days} Days</div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-sky-800 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">{item.description}</p>
                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                                       <button 
                                            onClick={() => navigate(`/itinerary/${item._id}`)}
                                            className="text-sky-800 font-extrabold text-sm flex items-center gap-2 group-hover:gap-4 transition-all hover:text-sky-600"
                                        >
                                            EXPLORE JOURNEY <ArrowForward fontSize="small" />
                                        </button>   
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <AccessTime fontSize="small"/> {item.category}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Destination Spotlight - Image එකේ පහළ තියෙන Section එක */}
                <section className="max-w-screen-2xl mx-auto px-12 bg-white py-20 rounded-3xl border border-slate-100 shadow-sm">
                    <h2 className="text-4xl font-serif font-bold text-sky-950 text-center mb-16">Iconic Destination Spotlight</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Sigiriya Card */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-slate-50 p-8 rounded-2xl shadow-inner">
                            <div className="md:col-span-7 group relative overflow-hidden rounded-xl h-[300px]">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600" alt="Sigiriya" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h2 className="text-3xl font-serif font-bold mb-3">Ancient Rock Fortress</h2>
                                    <p className="max-w-md opacity-90 text-sm leading-relaxed">Sigiriya Lion Rock Citadel: A magnificent 5th-century palace in the sky.</p>
                                </div>
                            </div>
                            <div className="md:col-span-5 flex flex-col justify-center space-y-6">
                                <h4 className="text-xl font-serif font-bold text-sky-900 border-b pb-3 border-sky-100">Sigiriya Highlights</h4>
                                <ul className="space-y-5">
                                    <li className="flex gap-4"><Castle className="text-green-800" /> Lion Rock Citadel</li>
                                    <li className="flex gap-4"><LocationOn className="text-amber-700" /> Dambulla Cave Temples</li>
                                    <li className="flex gap-4"><LocalFlorist className="text-teal-700" /> Anuradhapura Ruins</li>
                                </ul>
                            </div>
                        </div>

                        {/* Kandy Card */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-slate-50 p-8 rounded-2xl shadow-inner">
                            <div className="md:col-span-7 group relative overflow-hidden rounded-xl h-[300px]">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600" alt="Kandy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h2 className="text-3xl font-serif font-bold mb-3">Kandy, The Cultural Capital</h2>
                                    <p className="max-w-md opacity-90 text-sm leading-relaxed">Explore the sacred Temple of the Tooth and lush botanical gardens.</p>
                                </div>
                            </div>
                            <div className="md:col-span-5 flex flex-col justify-center space-y-6">
                                <h4 className="text-xl font-serif font-bold text-sky-900 border-b pb-3 border-sky-100">Kandy Highlights</h4>
                                <ul className="space-y-5">
                                    <li className="flex gap-4"><TempleHindu className="text-sky-800" /> Temple of the Tooth</li>
                                    <li className="flex gap-4"><Place className="text-red-700" /> Peradeniya Botanical Gardens</li>
                                    <li className="flex gap-4"><Schedule className="text-slate-700" /> Pinnawala Elephant Orphanage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

           
        </div>
    );
};

export default Itineraries;