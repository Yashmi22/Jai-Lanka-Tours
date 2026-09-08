import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Components Import 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';


// Lazy load Pages
const Home = lazy(() => import('./pages/Home'));
const DayTours = lazy(() => import('./pages/DayTours'));
const TourDetails = lazy(() => import('./pages/TourDetails'));
const DiscoverSriLanka = lazy(() => import('./pages/DiscoverSriLanka'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const PlanYourJourney = lazy(() => import('./pages/PlanYourJourney'));
const ItineraryDetails = lazy(() => import('./pages/ItineraryDetails')); 
const Blog = lazy(() => import('./pages/Blog')); 
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const Enquiry = lazy(() => import('./pages/Enquiry'));
const DiscoverDetails = lazy(() => import('./pages/DiscoverDetails'));
const Itineraries = lazy(() => import('./pages/itineraries')); 
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Accommodation = lazy(() => import('./pages/Accommodation'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));


// Loading Fallback Component
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0b0f19]">
    <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// --- MAIN LAYOUT MANAGEMENT ---
const MainLayout = () => {
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-slate-900 overflow-x-hidden bg-[#0b0f19]">
      
      {/* Navbar visible only for non-admin pages. Pass isHome to Navbar to handle styling */}
      {!isAdmin && <Navbar isHome={isHome} />}

      <main className="flex-grow w-full">
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </main>
      {/* Footer visible only for non-admin pages */}
      {!isAdmin && <Footer />}
    </div>
  );
};

// Main App Component 
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Main Layout */}
        <Route path="/*" element={<MainLayout />} />
        
        {/* Admin Login Route */}
        <Route path="/admin/login" element={
          <Suspense fallback={<Loader />}>
            <AdminLogin />
          </Suspense>
        } />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;