import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();

  // මෙතන තියෙන්නේ උදාහරණයක් විදිහට දත්ත කිහිපයක්. 
  // පසුව අපිට මේවා Database එකකින් ගන්න පුළුවන්.
  const tourData = {
    "sigiriya": {
      title: "Sigiriya: The Lion Rock Fortress",
      image: "https://images.unsplash.com/photo-1588598106205-094e92ec4915?q=80&w=1200",
      description: "Experience the eighth wonder of the world. Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
      duration: "04 Hours",
      price: "55",
      includes: ["English Speaking Guide", "Luxury Transport", "Entrance Fees", "Traditional Lunch"],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel and transfer to Sigiriya." },
        { time: "09:30 AM", activity: "Starting the climb to the summit of the Rock." },
        { time: "11:30 AM", activity: "Exploring the Mirror Wall and Frescoes." },
        { time: "01:00 PM", activity: "Traditional Sri Lankan Lunch." }
      ]
    }
  };

  // දැනට Sigiriya විස්තර විතරක් පෙන්වීමට සකසා ඇත
  const tour = tourData["sigiriya"]; 

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
        <img src={tour.image} className="w-full h-full object-cover" alt={tour.title} />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
          <Link to="/day-tours" className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 hover:opacity-100">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Day Tours
          </Link>
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4">{tour.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Side: Details */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-headline font-bold mb-6 text-slate-900">Experience Highlights</h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-12 font-light">{tour.description}</p>
          
          <h3 className="text-xl font-headline font-bold mb-6">Planned Itinerary</h3>
          <div className="space-y-8 border-l-2 border-slate-100 pl-8 ml-2">
            {tour.itinerary.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#005483] border-4 border-white shadow-sm"></div>
                <p className="text-xs font-bold text-[#005483] mb-1">{item.time}</p>
                <p className="text-slate-700 font-medium">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Booking Summary Card */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 p-10 rounded-3xl sticky top-32 border border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Starting from</p>
            <h3 className="text-4xl font-headline font-bold text-slate-900 mb-8">${tour.price} <span className="text-sm font-normal opacity-50">/ pp</span></h3>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="material-symbols-outlined text-[#005483]">check_circle</span>
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="material-symbols-outlined text-[#005483]">timer</span>
                <span>Duration: {tour.duration}</span>
              </div>
            </div>

            <button className="w-full bg-[#005483] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-900/10 mb-4">
              Book This Experience
            </button>
            <p className="text-[10px] text-center text-slate-400 font-medium">Free cancellation up to 24 hours before.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TourDetails;