import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './index.css';

// Pages Import කිරීම
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import OurStory from './pages/OurStory';
import Itineraries from './pages/itineraries';
import PlanYourJourney from './pages/PlanYourJourney';
import ItineraryDetails from './pages/ItineraryDetails'; 
import Blog from './pages/Blog'; 
import BlogDetails from './pages/BlogDetails'; 
import Accommodation from './pages/Accommodation'; // 🔥 මෙන්න බාබා අලුතින් Accommodation පේජ් එක Import කළා!

// Admin Dashboard පාර නිවැරදි කරපු පේළිය
import AdminDashboard from './pages/admin/AdminDashboard'; 

// Components Import කිරීම
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// --- MAIN LAYOUT MANAGEMENT ---
const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {!isHome && <Navbar />}

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {!isHome && <Footer />}
    </div>
  );
};

// ප්‍රධාන App Component එක
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="itineraries" element={<Itineraries categoryFilter="All" />} />
          <Route path="itineraries/adventure" element={<Itineraries categoryFilter="Adventure" />} />
          <Route path="itineraries/culture" element={<Itineraries categoryFilter="Culture" />} />
          <Route path="itineraries/north-east" element={<Itineraries categoryFilter="North-East" />} />
          <Route path="itineraries/romantic" element={<Itineraries categoryFilter="Romantic" />} />
          <Route path="itineraries/ayurvedic" element={<Itineraries categoryFilter="Ayurvedic" />} />
          <Route path="itineraries/differently-abled" element={<Itineraries categoryFilter="Differently-abled" />} />
          <Route path="itineraries/wildlife" element={<Itineraries categoryFilter="Wildlife" />} />
          <Route path="day-tours" element={<DayTours />} />
          <Route path="tour/:id" element={<TourDetails />} />
          <Route path="discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="plan-journey" element={<PlanYourJourney />} />
          <Route path="itinerary/:id" element={<ItineraryDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          
          {/* 🚀 මෙන්න බාබා අලුතින් Accommodation පේජ් එකට හදපු Route එක! */}
          <Route path="accommodation" element={<Accommodation />} /> 
          
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} /> 
          
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;