import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaPlus, FaTrash, FaBed, FaRoute, FaPenNib, 
  FaCloudUploadAlt, FaSearch, FaBell, FaUserCircle,
  FaWallet, FaUsers, FaUserTie, FaCheckSquare, FaPlane, FaPhoneAlt, FaGlobe
} from 'react-icons/fa';
import AdminItineraryManager from './AdminItineraryManager'; // Importing the Itinerary Manager component
import DiscoverAdmin from './adminDiscover'; // Importing the Admin Discover component

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [listData, setListData] = useState([]);
  
  // 1. Top Stats Cards Data
  const stats = [
    { label: 'Total Earnings', value: '2.8B', icon: <FaWallet />, color: 'bg-[#ff5e57]' },
    { label: 'Happy Users', value: '1.5M', icon: <FaUsers />, color: 'bg-[#45aaf2]' },
    { label: 'Employees', value: '10K', icon: <FaUserTie />, color: 'bg-[#a55eea]' },
    { label: 'New Bookings', value: '12K', icon: <FaCheckSquare />, color: 'bg-[#20bf6b]' },
  ];

  return (
    <div className="flex min-h-screen bg-[#1a1c2e] text-slate-300 font-sans">
      
      {/* --- Sidebar (Image එකේ තියෙන විදිහටම) --- */}
      <div className="w-72 bg-[#141625] border-r border-slate-800 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-[#ff5e57] rounded-xl flex items-center justify-center text-white font-bold italic text-xl shadow-lg shadow-[#ff5e5744]">T</div>
          <h1 className="text-xl font-bold tracking-tight text-white uppercase italic">Trouvaille<span className="text-[#ff5e57]">!!</span></h1>
        </div>
        
        <nav className="flex-1 space-y-2 text-sm font-medium">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaRoute /> Dashboard
          </button>
          <button onClick={() => setActiveTab('itinerary-manager')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'itinerary-manager' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaRoute /> Manage Itineraries
          </button>
          <button onClick={() => setActiveTab('itinerary')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'itinerary' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaRoute /> Bookings
          </button>
          <button onClick={() => setActiveTab('accommodation')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'accommodation' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaBed /> Accommodations
          </button>
          <button onClick={() => setActiveTab('blog')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'blog' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaPenNib /> Blogs
          </button>
          <button onClick={() => setActiveTab('discover')} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${activeTab === 'discover' ? 'bg-[#ff5e57] text-white' : 'text-slate-500 hover:text-white'}`}>
             <FaGlobe /> Discover
          </button>
        </nav>

        {/* Footer Admin info */}
        <div className="mt-auto pt-10 border-t border-slate-800">
            <div className="bg-[#ff5e5733] p-4 rounded-2xl border border-[#ff5e5755] flex items-center gap-3">
                <FaUserCircle size={24} className="text-[#ff5e57]" />
                <p className="text-xs font-bold text-white">Contact Super Admin</p>
            </div>
            <p className="text-[10px] text-slate-600 mt-4 text-center">© 2026 Jai Lanka Travel & Tours</p>
        </div>
      </div>

      {/* --- Main Dashboard Area --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-10 bg-[#1a1c2e]">
            <h2 className="text-xl font-bold text-white">Admin, Dashboard</h2>
            <div className="flex items-center gap-8">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input className="bg-[#141625] border-none rounded-lg py-1.5 pl-10 pr-4 text-xs w-64" placeholder="Search..." />
                </div>
                <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="text-[#ff5e57]">EN</span>
                    <FaBell className="text-slate-500" />
                    <div className="flex items-center gap-2 text-white">
                        <FaUserCircle size={24} />
                        <span>Hi, Morris</span>
                    </div>
                </div>
            </div>
        </header>

        {/* Scrollable Content */}
        <main className="p-10 overflow-y-auto space-y-8 pb-20">
            
            {/* Conditional rendering based on active tab */}
            {activeTab === 'itinerary-manager' ? (
                <AdminItineraryManager />
            ) : activeTab === 'discover' ? (
                <DiscoverAdmin />
            ) : (
                <>
            {/* 1. Stats Row (23_Dashboard.jpg එකේ තියෙන පිරිසැලසුම) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                    <div key={i} className={`${s.color} p-6 rounded-[24px] flex items-center justify-between shadow-xl`}>
                        <div className="text-white">
                            <p className="text-2xl font-black">{s.value}</p>
                            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">{s.label}</p>
                        </div>
                        <div className="text-3xl text-white opacity-40">{s.icon}</div>
                    </div>
                ))}
            </div>

            {/* 2. Charts & Hotel Booking Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Latest Hotel Bookings Widget */}
                <div className="lg:col-span-4 bg-[#141625] p-6 rounded-[32px] border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-sm font-bold text-white">Latest Hotel Bookings</h3>
                        <span className="text-[10px] text-[#ff5e57] font-bold">May, 2026</span>
                    </div>
                    {/* Booking List Item */}
                    <div className="space-y-4">
                        {[
                            { name: 'Queens Hotel', date: '28-29 May', price: 'Mark Wayne', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100' },
                            { name: 'Hotel Lavilia', date: '01-05 June', price: 'Ena Willis', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100' }
                        ].map((h, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 hover:bg-[#1f213a] rounded-2xl transition-all">
                                <img src={h.img} className="w-12 h-12 rounded-xl object-cover" alt="" />
                                <div>
                                    <h4 className="text-xs font-bold text-white">{h.name}</h4>
                                    <p className="text-[10px] text-slate-500">{h.date} | <span className="text-[#ff5e57]">{h.price}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Earning Stats (Chart Placeholder) */}
                <div className="lg:col-span-5 bg-[#141625] p-6 rounded-[32px] border border-slate-800 flex flex-col">
                    <h3 className="text-sm font-bold text-white mb-4">Earning stats on all bookings</h3>
                    <div className="flex-1 flex items-end gap-2 justify-between px-4 pb-4">
                        {/* Simple bars for visualization */}
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <div key={i} style={{ height: `${h}%` }} className="w-2 bg-[#ff5e57] rounded-full opacity-40 hover:opacity-100 transition-all"></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold px-2 uppercase tracking-tighter mt-4">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                    </div>
                </div>

                {/* Circular Analytics */}
                <div className="lg:col-span-3 bg-[#141625] p-6 rounded-[32px] border border-slate-800 flex flex-col items-center justify-center text-center">
                    <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Monthly Increase</h3>
                    <div className="relative w-32 h-32 flex items-center justify-center border-[8px] border-[#ff5e5733] rounded-full">
                         <div className="absolute inset-0 border-[8px] border-[#ff5e57] rounded-full border-t-transparent -rotate-45"></div>
                         <span className="text-2xl font-black text-white">60%</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-6 leading-relaxed">Calculated with respect to<br/>per 100 bookings</p>
                </div>
            </div>

            {/* 3. Help Desk & Flight Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
                
                {/* Flight Info Placeholder */}
                <div className="lg:col-span-8 bg-[#141625] p-8 rounded-[32px] border border-slate-800">
                    <div className="flex justify-between mb-8">
                        <h3 className="font-bold text-white">Calculate monthly report based on each segment</h3>
                        <div className="flex gap-4 text-[10px] font-black text-[#ff5e57] uppercase">
                            <span>Hotels</span><span className="text-slate-600">Flights</span><span className="text-slate-600">Buses</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center border-t border-slate-800 pt-8">
                        <div><p className="text-xl font-bold text-white">2.8B</p><p className="text-[10px] text-slate-500">Total Properties</p></div>
                        <div><p className="text-xl font-bold text-white">5K</p><p className="text-[10px] text-slate-500">New Bookings</p></div>
                        <div><p className="text-xl font-bold text-white">2K</p><p className="text-[10px] text-slate-500">New Customers</p></div>
                        <button className="bg-[#5758bb] text-white p-3 rounded-xl text-[10px] font-bold">Generate Report</button>
                    </div>
                </div>

                {/* Covid Help Desk / Contact Widget (23_Dashboard.jpg එකේ රතු පාට Card එක) */}
                <div className="lg:col-span-4 bg-[#ff5e57] p-8 rounded-[32px] text-white">
                    <h3 className="font-bold text-lg mb-2">Help Desk</h3>
                    <p className="text-xs opacity-80 mb-6">We value our employees, following plans have been introduced.</p>
                    <div className="space-y-3 text-[10px] font-bold">
                        <div className="flex items-center gap-2"><FaCheckSquare /> Health Insurance</div>
                        <div className="flex items-center gap-2"><FaCheckSquare /> Family Protection</div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <div className="bg-white/20 p-3 rounded-full"><FaPhoneAlt /></div>
                        <span className="text-sm font-black">+94 112 345 678</span>
                    </div>
                </div>

            </div>
                </>
            )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;