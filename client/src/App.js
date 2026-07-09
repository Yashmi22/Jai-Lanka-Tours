import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Pages Import 
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import AboutUs from './pages/AboutUs';
import PlanYourJourney from './pages/PlanYourJourney';
import ItineraryDetails from './pages/ItineraryDetails'; 
import Blog from './pages/Blog'; 
import AdminDashboard from './pages/admin/AdminDashboard';
import Enquiry from './pages/Enquiry';
import DiscoverDetails from './pages/DiscoverDetails';
import Itineraries from './pages/itineraries'; 
import AdminLogin from './pages/admin/AdminLogin';
import BlogDetails from './pages/BlogDetails';
import Accommodation from './pages/Accommodation';


import BlogPostDetail from './pages/BlogPostDetail';

// Components Import 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// --- MAIN LAYOUT MANAGEMENT ---
const MainLayout = () => {
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-slate-900 overflow-x-hidden bg-[#0b0f19]">
      
      {/* Navbar visible only for non-home and non-admin pages */}
      {!isHome && !isAdmin && <Navbar />}

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Itineraries Routes */}
          <Route path="/itineraries" element={<Itineraries key="all" categoryFilter="All" />} />
          <Route path="/itineraries/adventure" element={<Itineraries key="adventure" categoryFilter="Off Road Adventure Tour" />} />
          <Route path="/itineraries/culture" element={<Itineraries key="culture" categoryFilter="Culture & Wildlife Tour" />} />
          <Route path="/itineraries/north-east" element={<Itineraries key="north-east" categoryFilter="North & East Coast Tour" />} />
          <Route path="/itineraries/romantic" element={<Itineraries key="romantic" categoryFilter="Romantic Tour" />} />
          <Route path="/itineraries/ayurvedic" element={<Itineraries key="ayurvedic" categoryFilter="Ayurvedic & Wellness Tour" />} />
          <Route path="/itineraries/differently-abled" element={<Itineraries key="differently-abled" categoryFilter="Differently able Tour" />} />
          
          {/* Other Public Routes */}
          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="/discover/:id" element={<DiscoverDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/blogpost/:id" element={<BlogPostDetail />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/plan-journey" element={<PlanYourJourney />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </main>
          
      {/* Footer visible only for non-home and non-admin pages */}
      {!isHome && !isAdmin && <Footer />}
    </div>
  );
};

// Main App Component 
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Main Layout */}
        <Route path="/*" element={<MainLayout />} />
        
        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;