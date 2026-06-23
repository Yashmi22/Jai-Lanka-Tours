import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Pages Import කිරීම (නම් නිවැරදිව ඇති බව සහතික කරගන්න)
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import OurStory from './pages/OurStory';
import PlanYourJourney from './pages/PlanYourJourney';
import ItineraryDetails from './pages/ItineraryDetails'; 
import Blog from './pages/Blog'; 
import AdminDashboard from './pages/admin/AdminDashboard';
import Enquiry from './pages/Enquiry';
import DiscoverDetails from './pages/DiscoverDetails';

// ⚠️ මෙතන ෆයිල් එකේ නම Capital "I" දාලා නිවැරදි කළා
import Itineraries from './pages/itineraries'; 

// Components Import කිරීම
// (සටහන: ඔබේ Navbar/Footer ෆයිල් ඇතුළේ export default Navbar ලෙස දී නැත්නම්, 
//  මේවා import { Navbar } from ... ලෙස වෙනස් විය යුතුය)
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// --- MAIN LAYOUT MANAGEMENT ---
const MainLayout = () => {
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  // Admin Dashboard එක ඇතුළතදී සාමාන්‍ය Navbar/Footer සැඟවීම සඳහා:
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-slate-900 overflow-x-hidden bg-[#0b0f19]">
      
      {/* Home එකේදී සහ Admin එකේදී හැර අනෙක් සියලුම පිටු සඳහා Navbar එක පෙන්වයි */}
      {!isHome && !isAdmin && <Navbar />}

      {/* සයිට් එකේ සියලුම පිටු වල Routes (Paths) මෙතනින් ක්‍රියාත්මක වේ */}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/itineraries" element={<Itineraries key="all" categoryFilter="All" />} />
          <Route path="/itineraries/adventure" element={<Itineraries key="adventure" categoryFilter="Adventure and Nature Based Tour" />} />
          <Route path="/itineraries/culture" element={<Itineraries key="culture" categoryFilter="Culture & Heritage Tour" />} />
          <Route path="/itineraries/north-east" element={<Itineraries key="north-east" categoryFilter="North & East Coast Tour" />} />
          <Route path="/itineraries/romantic" element={<Itineraries key="romantic" categoryFilter="Romantic Tours" />} />
          <Route path="/itineraries/ayurvedic" element={<Itineraries key="ayurvedic" categoryFilter="Ayurvedic & Wellness Tour" />} />
          <Route path="/itineraries/differently-abled" element={<Itineraries key="differently-abled" categoryFilter="Differently able Tour" />} />
          <Route path="/itineraries/wildlife" element={<Itineraries key="wildlife" categoryFilter="Wildlife Tour" />} />

          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="/discover/:id" element={<DiscoverDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/plan-journey" element={<PlanYourJourney />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
          <Route path="/enquiry" element={<Enquiry />} />
          
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {/* Home එකේදී සහ Admin එකේදී හැර අනෙක් පිටුවල Footer එක පෙන්වයි */}
      {!isHome && !isAdmin && <Footer />}
    </div>
  );
};

// ප්‍රධාන App Component එක
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;