import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaPlus, FaTrash, FaBed, FaRoute, FaPenNib, 
  FaCloudUploadAlt, FaSearch, FaBell, FaUserCircle,
  FaWallet, FaUsers, FaUserTie, FaCheckSquare, FaPlane, FaPhoneAlt, FaGlobe, FaChevronRight
} from 'react-icons/fa';
import AdminItineraryManager from './AdminItineraryManager'; 
import AdminDiscover from './AdminDiscover';
import AdminBlog from './AdminBlog'; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [listData, setListData] = useState([]);
  
  // 1. Top Stats Cards Data (Brand එකට ගැලපෙන පරිදි වර්ණ සහ Shadow වෙනස් කරන ලදී)
  const stats = [
    { label: 'Total Earnings', value: '2.8B', icon: <FaWallet />, color: 'from-amber-500 to-amber-600 text-black shadow-amber-500/10' },
    { label: 'Happy Users', value: '1.5M', icon: <FaUsers />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
    { label: 'Employees', value: '10K', icon: <FaUserTie />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
    { label: 'New Bookings', value: '12K', icon: <FaCheckSquare />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
  ];

  return (
    <div className="flex min-h-screen bg-[#070a13] text-slate-300 font-sans antialiased">
      
      {/* --- Sidebar (Premium Glassmorphism Style) --- */}
      <div className="w-72 bg-[#0b0f19] border-r border-slate-900 p-6 flex flex-col justify-between relative z-20">
        <div>
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10 px-2 pt-2">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-black font-headline font-bold text-lg shadow-lg shadow-amber-500/20">J</div>
            <div>
              <h1 className="text-md font-headline font-light tracking-widest text-white uppercase">Jai <span className="text-amber-400 font-normal">Lanka</span></h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold -mt-0.5">Control Panel</p>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="space-y-1.5 text-xs font-bold tracking-wider uppercase">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaRoute className={activeTab === 'dashboard' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Dashboard</div>
              {activeTab === 'dashboard' && <FaChevronRight size={10} />}
            </button>

            <button 
              onClick={() => setActiveTab('itinerary-manager')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'itinerary-manager' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaRoute className={activeTab === 'itinerary-manager' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Manage Itineraries</div>
              {activeTab === 'itinerary-manager' && <FaChevronRight size={10} />}
            </button>

            <button 
              onClick={() => setActiveTab('itinerary')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'itinerary' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaRoute className={activeTab === 'itinerary' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Bookings</div>
              {activeTab === 'itinerary' && <FaChevronRight size={10} />}
            </button>

            <button 
              onClick={() => setActiveTab('accommodation')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'accommodation' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaBed className={activeTab === 'accommodation' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Accommodations</div>
              {activeTab === 'accommodation' && <FaChevronRight size={10} />}
            </button>

            <button 
              onClick={() => setActiveTab('blog')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'blog' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaPenNib className={activeTab === 'blog' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Blogs</div>
              {activeTab === 'blog' && <FaChevronRight size={10} />}
            </button>

            <button 
              onClick={() => setActiveTab('discover')} 
              className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'discover' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
            >
              <div className="flex items-center gap-3.5"><FaGlobe className={activeTab === 'discover' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Discover Sri Lanka</div>
              {activeTab === 'discover' && <FaChevronRight size={10} />}
            </button>
          </nav>
        </div>

        {/* Footer Admin Info */}
        <div className="pt-6 border-t border-slate-900">
          <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10 flex items-center gap-3">
            <FaUserCircle size={20} className="text-amber-400" />
            <p className="text-[11px] font-bold text-slate-300 tracking-wide">Contact Super Admin</p>
          </div>
          <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-4 text-center">© 2026 Jai Lanka Travels</p>
        </div>
      </div>

      {/* --- Main Dashboard Area --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-10 bg-[#070a13] border-b border-slate-900">
          <div>
            <h2 className="text-lg font-light text-white uppercase tracking-wider">Overview</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest -mt-0.5">Jai Lanka Workspace</p>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Search Box */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-xs" />
              <input className="bg-[#0b0f19] border border-slate-900 focus:border-slate-800 focus:outline-none rounded-xl py-2 pl-9 pr-4 text-xs w-60 text-slate-200 transition-colors" placeholder="Search insights..." />
            </div>
            
            {/* User Badges */}
            <div className="flex items-center gap-5 text-xs font-bold tracking-wider">
              <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-[10px]">EN</span>
              <div className="relative cursor-pointer text-slate-400 hover:text-white transition-colors">
                <FaBell size={14} />
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
              </div>
              <div className="h-4 w-[1px] bg-slate-800"></div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <FaUserCircle size={22} className="text-slate-500" />
                <span className="font-medium text-slate-200 text-xs">Hi, Morris</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="p-10 overflow-y-auto space-y-8 pb-24 bg-[#070a13]">
          
          {/* Conditional rendering based on active tab */}
          {activeTab === 'itinerary-manager' ? (
            <AdminItineraryManager />
          ) : activeTab === 'discover' ? (
            <AdminDiscover />
          ) : activeTab === 'blog' ? (
            <AdminBlog />
          ) : (
            <>
              {/* 1. Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className={`bg-gradient-to-br ${s.color} p-5 rounded-2xl flex items-center justify-between shadow-xl`}>
                    <div>
                      <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5 opacity-70">{s.label}</p>
                    </div>
                    <div className="text-2xl opacity-40">{s.icon}</div>
                  </div>
                ))}
              </div>

              {/* 2. Charts & Hotel Booking Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Latest Hotel Bookings Widget */}
                <div className="lg:col-span-4 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">Latest Bookings</h3>
                    <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">May, 2026</span>
                  </div>
                  
                  {/* Booking List Item */}
                  <div className="space-y-3">
                    {[
                      { name: 'Queens Hotel', date: '28-29 May', price: 'Mark Wayne', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100' },
                      { name: 'Hotel Lavilia', date: '01-05 June', price: 'Ena Willis', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100' }
                    ].map((h, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-900/40 rounded-xl border border-transparent hover:border-slate-800/50 transition-all duration-300">
                        <img src={h.img} className="w-11 h-11 rounded-lg object-cover shadow-md" alt="" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-200">{h.name}</h4>
                          <p className="text-[10px] text-slate-500 font-medium mt-0.5">{h.date} | <span className="text-amber-400/80">{h.price}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Earning Stats (Chart Placeholder) */}
                <div className="lg:col-span-5 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl flex flex-col">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Earning Analytics</h3>
                  <div className="flex-1 flex items-end gap-3 justify-between px-2 pb-2 min-h-[140px]">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
                        <div style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-500 shadow-lg group-hover:shadow-amber-500/20"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-600 font-bold px-1 uppercase tracking-wider mt-4 border-t border-slate-900 pt-3">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                  </div>
                </div>

                {/* Circular Analytics */}
                <div className="lg:col-span-3 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl flex flex-col items-center justify-center text-center">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Growth Rate</h3>
                  <div className="relative w-28 h-28 flex items-center justify-center border-4 border-slate-900 rounded-full">
                    <div className="absolute inset-0 border-4 border-amber-500 rounded-full border-t-transparent border-r-transparent -rotate-45"></div>
                    <span className="text-xl font-semibold text-white tracking-tight">60%</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mt-5 leading-relaxed">Calculated with respect to<br/>per 100 bookings</p>
                </div>
              </div>

              {/* 3. Report Generation & Help Desk Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Report Area */}
                <div className="lg:col-span-8 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-white">Segment Wise Reports</h3>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-amber-400 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10 cursor-pointer">Hotels</span>
                      <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">Flights</span>
                      <span className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors">Buses</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center border-t border-slate-900 pt-6 items-center">
                    <div><p className="text-md font-bold text-slate-200">2.8B</p><p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">Properties</p></div>
                    <div><p className="text-md font-bold text-slate-200">5K</p><p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">Bookings</p></div>
                    <div><p className="text-md font-bold text-slate-200">2K</p><p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-0.5">Customers</p></div>
                    <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black py-2.5 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/5 transition-all">Generate</button>
                  </div>
                </div>

                {/* Help Desk Card (Premium Amber Overlay Style) */}
                <div className="lg:col-span-4 bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-2xl text-black shadow-xl shadow-amber-500/5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-1">Workspace Help Desk</h3>
                    <p className="text-[11px] font-medium leading-relaxed opacity-85">Bespoke assistance and security benefits for active Jai Lanka workspace operators.</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4">
                    <div className="bg-black/10 p-2.5 rounded-xl"><FaPhoneAlt size={12} /></div>
                    <span className="text-xs font-bold tracking-wider">+94 112 345 678</span>
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