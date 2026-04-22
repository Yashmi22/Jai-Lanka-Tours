import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // මෙතැනදී Database එකකින් data ගේනවා වෙනුවට අපි Mock Data එකක් පාවිච්චි කරමු. 
  // අනාගතයේදී Backend API එකක් හරහා මේ දත්ත පහසුවෙන් ලබාගත හැක.
  const itineraryData = {
    'cultural-odyssey': {
      title: 'THE CULTURAL ODYSSEY',
      category: 'CULTURAL TOURS',
      duration: '08 Nights & 09 Days',
      price: '$1,200',
      description: 'Experience the rich heritage of Sri Lanka. From the ancient rock fortress of Sigiriya to the sacred Temple of the Tooth in Kandy, this journey covers the heart of the Cultural Triangle.',
      img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=2000',
      days: [
        { day: 'Day 01', activity: 'Arrival in Colombo & Transfer to Negombo.' },
        { day: 'Day 02', activity: 'Drive to Sigiriya via Pinnawala Elephant Orphanage.' },
        { day: 'Day 03', activity: 'Climb Sigiriya Rock Fortress & Minneriya Safari.' },
        { day: 'Day 04', activity: 'Travel to Kandy via Dambulla Cave Temple.' },
        { day: 'Day 05', activity: 'Explore Kandy City & Temple of the Tooth Relic.' },
      ]
    },
    // ඔබට අවශ්‍ය තවත් itinerary සඳහා දත්ත මෙතනට එකතු කරන්න
  };

  const details = itineraryData[id] || { 
    title: 'Itinerary Not Found', 
    description: 'The requested itinerary could not be found.',
    img: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=2000'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img src={details.img} alt={details.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <button onClick={() => navigate(-1)} className="absolute top-10 left-10 text-white hover:text-[#00a2ff] transition-all">← Back</button>
          <p className="text-[#00a2ff] font-bold tracking-widest uppercase mb-4">{details.category}</p>
          <h1 className="text-4xl md:text-6xl font-headline text-white mb-6">{details.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Description */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-headline text-slate-900 mb-6">Trip Overview</h2>
          <p className="text-slate-600 leading-relaxed mb-10">{details.description}</p>
          
          <h3 className="text-2xl font-headline text-slate-900 mb-6">Itinerary Plan</h3>
          <div className="space-y-6">
            {details.days?.map((d, index) => (
              <div key={index} className="flex gap-6 border-b border-slate-100 pb-6">
                <span className="font-bold text-[#00a2ff] min-w-[80px]">{d.day}</span>
                <p className="text-slate-700">{d.activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h4 className="text-xl font-bold mb-4">Tour Summary</h4>
            <div className="flex justify-between mb-4">
              <span className="text-slate-500">Duration</span>
              <span className="font-bold">{details.duration}</span>
            </div>
            <div className="flex justify-between mb-8">
              <span className="text-slate-500">Price</span>
              <span className="font-bold text-[#e6004c]">{details.price || 'Contact Us'}</span>
            </div>
            <button className="w-full bg-slate-900 text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#00a2ff] transition-all">
              Book This Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;