
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';


// Pages Import
import Home from './pages/Home';
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import OurStory from './pages/OurStory';
import Itineraries from './pages/itineraries';
import SigiriyaIntro from './pages/SigiriyaIntro';
import PlanYourJourney from './pages/PlanYourJourney';
import ItineraryDetails from './pages/ItineraryDetails'; 
        

// Components Import
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Images Import
import myLogo from './assets/logo.jpg';
import hero1 from './assets/hero 1.jpg';
import hero2 from './assets/hero 2.jpg';
import hero3 from './assets/hero 3.jpg';
import hero4 from './assets/hero 4.jpg';

// --- Main App Component ---
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
      <div className="font-body bg-white text-slate-900">
        
        {/* Navbar Component - Appears on all pages */}
        <Navbar />

        {/* Content Routes */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home heroImages={heroImages} currentImage={currentImage} />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/day-tours" element={<DayTours />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
            <Route path="/our-story" element={<OurStory />} />  
            <Route path="/plan-journey" element={<PlanYourJourney />} />
            <Route path="/itinerary/:id" element={<ItineraryDetails />} />
            <Route path="/tour/:id" element={<TourDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;