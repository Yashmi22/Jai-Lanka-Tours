import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Components Import කිරීම
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// --- MAIN LAYOUT MANAGEMENT ---
// මෙමගින් Home Page එකේදී Footer එක සහ සාමාන්‍ය Navbar එක පෙන්වීම පාලනය කරයි.
const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-slate-900 overflow-x-hidden">
      
      {/* Home Page එක ඇතුළෙන්ම දැන් Luxury Navigation එකක් වැඩ කරන නිසා, 
        Home Page එකේදී සාමාන්‍ය සුදු Navbar එක පෙන්වන්නේ නැත. 
        අනෙක් සියලුම පිටු සඳහා (<Navbar />) එක උඩින් ලස්සනට දිස්වේ.
      */}
      {!isHome && <Navbar />}

      {/* සයිට් එකේ සියලුම පිටු වල Routes (Paths) මෙතනින් ක්‍රියාත්මක වේ */}
      <main className="flex-grow w-full">
        <Routes>
          {/* අලුත්ම Luxury Minimalist Home Page එක */}
          <Route path="/" element={<Home />} />
          
          {/* Itineraries Routes (Categories Filter එකත් සමඟ) */}
          <Route path="/itineraries" element={<Itineraries categoryFilter="All" />} />
          <Route path="/itineraries/adventure" element={<Itineraries categoryFilter="Adventure" />} />
          <Route path="/itineraries/culture" element={<Itineraries categoryFilter="Culture" />} />
          <Route path="/itineraries/north-east" element={<Itineraries categoryFilter="North-East" />} />
          <Route path="/itineraries/romantic" element={<Itineraries categoryFilter="Romantic" />} />
          <Route path="/itineraries/ayurvedic" element={<Itineraries categoryFilter="Ayurvedic" />} />
          <Route path="/itineraries/differently-abled" element={<Itineraries categoryFilter="Differently-abled" />} />
          <Route path="/itineraries/wildlife" element={<Itineraries categoryFilter="Wildlife" />} />
          
          {/* අනෙකුත් අභ්‍යන්තර පිටු (Other Internal Pages) */}
          <Route path="/day-tours" element={<DayTours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/plan-journey" element={<PlanYourJourney />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
        </Routes>
      </main>
      
      {/* Home Page එකේදී Luxury Minimalist Look එක තියාගන්න Footer එක පෙන්වන්නේ නැත, අනෙක් පිටුවල පෙන්වයි */}
      {!isHome && <Footer />}
    </div>
  );
};

// ප්‍රධාන App Component එක
function App() {
  return (
    <Router>
      <Routes>
        {/* සියලුම URL පරීක්ෂා කර සුදුසු Layout එක තෝරාගැනීමට /* යොදා ඇත */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;