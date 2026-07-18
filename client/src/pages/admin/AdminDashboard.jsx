import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaBed, FaRoute, FaPenNib, FaUserCircle,
  FaWallet,FaGlobe, FaChevronRight, FaSuitcase, FaCompass
} from 'react-icons/fa';
import AdminItineraryManager from './AdminItineraryManager'; 
import AdminDiscover from './adminDiscover';
import AdminBlog from './AdminBlog'; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  
  const [dashboardStats, setDashboardStats] = useState({
    totalRevenue: 'Rs. 0.0',
    activeItineraries: 0,
    dayToursCount: 0,
    accommodationsCount: 0,
    monthlyViews: [0, 0, 0, 0, 0, 0, 0]
  });
  
  const [loading, setLoading] = useState(true);

  // 🔄 Backend Server 
  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        setLoading(true);
       const token = localStorage.getItem('adminToken');
const response = await axios.get('https://jai-lanka-tours-production.up.railway.app/api/admin/stats', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
        // Backend state update
        setDashboardStats(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Backend error:", error);
        setLoading(false);
      }
    };

    if (activeTab === 'dashboard') {
      fetchLiveStats();
    }
  }, [activeTab]);

  
  const stats = [
    { label: 'Total Revenue', value: dashboardStats.totalRevenue, icon: <FaWallet />, color: 'from-amber-500 to-amber-600 text-black shadow-amber-500/10' },
    { label: 'Active Itineraries', value: dashboardStats.activeItineraries, icon: <FaRoute />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
    { label: 'Day Tours Listed', value: dashboardStats.dayToursCount, icon: <FaCompass />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
    { label: 'Accommodations', value: dashboardStats.accommodationsCount, icon: <FaBed />, color: 'from-[#1e2640] to-[#111728] text-amber-400 border border-slate-800/80' },
  ];

  return (
    <div className="flex min-h-screen bg-[#070a13] text-slate-300 font-sans antialiased">
      
      {/* --- Sidebar --- */}
      <div className="w-72 bg-[#0b0f19] border-r border-slate-900 p-6 flex flex-col justify-between relative z-20">
        <div>
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10 px-2 pt-2">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-amber-500/20">J</div>
            <div>
              <h1 className="text-md font-light tracking-widest text-white uppercase">Jai <span className="text-amber-400 font-normal">Lanka</span></h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold -mt-0.5">Control Panel</p>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="space-y-1.5 text-xs font-bold tracking-wider uppercase">
            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaSuitcase className={activeTab === 'dashboard' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Dashboard Overview</div>
              {activeTab === 'dashboard' && <FaChevronRight size={10} />}
            </button>

            <button onClick={() => setActiveTab('itinerary-manager')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'itinerary-manager' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaRoute className={activeTab === 'itinerary-manager' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Itineraries</div>
              {activeTab === 'itinerary-manager' && <FaChevronRight size={10} />}
            </button>

            <button onClick={() => setActiveTab('daytours')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'daytours' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaCompass className={activeTab === 'daytours' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Day Tours</div>
              {activeTab === 'daytours' && <FaChevronRight size={10} />}
            </button>

            <button onClick={() => setActiveTab('discover')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'discover' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaGlobe className={activeTab === 'discover' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Discover</div>
              {activeTab === 'discover' && <FaChevronRight size={10} />}
            </button>

            <button onClick={() => setActiveTab('blog')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'blog' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaPenNib className={activeTab === 'blog' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Blog</div>
              {activeTab === 'blog' && <FaChevronRight size={10} />}
            </button>

            <button onClick={() => setActiveTab('accommodation')} className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${activeTab === 'accommodation' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}`}>
              <div className="flex items-center gap-3.5"><FaBed className={activeTab === 'accommodation' ? 'text-black' : 'text-amber-500/70 group-hover:text-amber-400'} /> Accommodation</div>
              {activeTab === 'accommodation' && <FaChevronRight size={10} />}
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
        <header className="h-20 flex items-center justify-between px-10 bg-[#070a13] border-b border-slate-900">
          <div>
            <h2 className="text-lg font-light text-white uppercase tracking-wider">{activeTab === 'dashboard' ? 'Overview' : activeTab.replace('-', ' ')}</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest -mt-0.5">Jai Lanka Workspace</p>
          </div>
        </header>

        <main className="p-10 overflow-y-auto space-y-8 pb-24 bg-[#070a13]">
          {activeTab === 'itinerary-manager' ? (
            <AdminItineraryManager />
          ) : activeTab === 'discover' ? (
            <AdminDiscover />
          ) : activeTab === 'blog' ? (
            <AdminBlog />
          ) : activeTab === 'daytours' || activeTab === 'accommodation' ? (
            <div className="text-center p-10 bg-[#0b0f19] border border-slate-900 rounded-2xl">
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">{activeTab} Management</h3>
              <p className="text-xs text-slate-500 mt-2">Section content loaded dynamically from backend.</p>
            </div>
          ) : (
            <>
              {/* 1. Live Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className={`bg-gradient-to-br ${s.color} p-5 rounded-2xl flex items-center justify-between shadow-xl`}>
                    <div>
                      <p className="text-2xl font-semibold tracking-tight">{loading ? '...' : s.value}</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5 opacity-70">{s.label}</p>
                    </div>
                    <div className="text-2xl opacity-40">{s.icon}</div>
                  </div>
                ))}
              </div>

              {/* 2. Content Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Featured Hotels</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Queens Hotel - Kandy', type: 'Luxury Hotel', rating: '4.8', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100' },
                      { name: 'Grand Hotel - Nuwara Eliya', type: 'Colonial Villa', rating: '4.9', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100' }
                    ].map((h, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-900/40 rounded-xl border border-transparent hover:border-slate-800/50 transition-all duration-300">
                        <img src={h.img} className="w-11 h-11 rounded-lg object-cover shadow-md" alt="" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-200">{h.name}</h4>
                          <p className="text-[10px] text-slate-500 font-medium mt-0.5">{h.type} | <span className="text-amber-400/80">⭐ {h.rating}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Chart Views From Backend */}
                <div className="lg:col-span-7 bg-[#0b0f19] p-6 rounded-2xl border border-slate-900 shadow-2xl flex flex-col">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Live Platform Views</h3>
                  <div className="flex-1 flex items-end gap-3 justify-between px-2 pb-2 min-h-[140px]">
                    {dashboardStats.monthlyViews?.map((h, i) => ( 
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer">
                        <div style={{ height: `${h}%` }} className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-md opacity-30 group-hover:opacity-100 transition-all duration-500 shadow-lg"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-600 font-bold px-1 uppercase tracking-wider mt-4 border-t border-slate-900 pt-3">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
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