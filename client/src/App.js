import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

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

// Components
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Images
import hero1 from './assets/hero 1.jpg';
import hero2 from './assets/hero 2.jpg';
import hero3 from './assets/hero 3.jpg';
import hero4 from './assets/hero 4.jpg';

// මෙම sub-component එක මගින් දැනට පවතින URL එක අනුව Header එක තෝරාගනී
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
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="/our-story" element={<OurStory />} />  
          <Route path="/plan-journey" element={<PlanYourJourney />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
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
      <MainLayout heroImages={heroImages} currentImage={currentImage} />
    </Router>
  );
}

export default App;