import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';

// Pages
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import OurStory from './pages/OurStory';
import Itineraries from './pages/itineraries';
import SigiriyaIntro from './pages/SigiriyaIntro';
import PlanYourJourney from './pages/PlanYourJourney';
import ItineraryDetails from './pages/ItineraryDetails';
import Enquiry from './pages/Enquiry';
import AdminDashboard from './pages/admin/AdminDashboard';

// Components
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Images
import hero1 from './assets/hero 1.jpg';
import hero2 from './assets/hero 2.jpg';
import hero3 from './assets/hero 3.jpg';
import hero4 from './assets/hero 4.jpg';

// Main Content Layout (මෙයට Navbar සහ Footer ඇතුළත් වේ)
const MainLayout = ({ heroImages, currentImage }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen w-full flex flex-col font-body text-slate-900">
      {/* Home page එකේදී HeroHeader, අනිත් ඒවායේදී Navbar */}
      {isHome ? <HeroHeader /> : <Navbar />}

      <div className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home heroImages={heroImages} currentImage={currentImage} />} />
          
          <Route path="/itineraries" element={<Itineraries categoryFilter="All" />} />
          <Route path="/itineraries/adventure" element={<Itineraries categoryFilter="Adventure" />} />
          <Route path="/itineraries/culture" element={<Itineraries categoryFilter="Culture" />} />
          <Route path="/itineraries/north-east" element={<Itineraries categoryFilter="North-East" />} />
          <Route path="/itineraries/romantic" element={<Itineraries categoryFilter="Romantic" />} />
          <Route path="/itineraries/ayurvedic" element={<Itineraries categoryFilter="Ayurvedic" />} />
          <Route path="/itineraries/differently-abled" element={<Itineraries categoryFilter="Differently-abled" />} />
          <Route path="/itineraries/wildlife" element={<Itineraries categoryFilter="Wildlife" />} />
          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/plan-journey" element={<PlanYourJourney />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <Router>
      <Routes>
        {/* ඉතිරි සියලුම පිටු සඳහා MainLayout එක භාවිතා වේ */}
        <Route path="/*" element={<MainLayout heroImages={heroImages} currentImage={currentImage} />} />
        </Routes>
    </Router>
  );
}

export default App;