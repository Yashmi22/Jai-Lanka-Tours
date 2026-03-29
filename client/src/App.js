import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 1. Image Import
import hero1 from './assets/hero1.avif'; 

function App() {
  const [tours, setTours] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Page එක load වුණ ගමන් animation එක start වෙන්න
    axios.get('http://localhost:5000/api/tours/all')
      .then(res => setTours(res.data))
      .catch(err => console.error("Database error:", err));
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fff', margin: 0, overflowX: 'hidden' }}>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      <style>{`
        /* --- SMART ANIMATIONS --- */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleImg {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        /* --- HEADER --- */
        .header-wrap { 
          position: absolute; width: 100%; top: 0; z-index: 1000; 
          display: flex; justify-content: space-between; align-items: center;
          padding: 30px 8%; box-sizing: border-box;
        }

        .logo-box { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .logo-box i { font-size: 35px; color: #d4af37; }
        .logo-box h1 { margin: 0; color: white; font-size: 26px; letter-spacing: 3px; text-transform: uppercase; }

        .nav-bar { display: flex; list-style: none; gap: 35px; margin: 0; padding: 0; }
        .nav-bar a { 
          text-decoration: none; color: white; font-size: 11px; 
          font-weight: 600; text-transform: uppercase; letter-spacing: 2px;
          opacity: 0.8; transition: 0.3s;
        }
        .nav-bar a:hover { opacity: 1; color: #d4af37; }

        /* --- SMART HERO --- */
        .hero-wrap { 
          position: relative; height: 100vh; overflow: hidden; background: #000; 
          display: flex; align-items: center; justify-content: center;
        }
        .slide-bg { 
          position: absolute; inset: 0; width: 100%; height: 100%; 
          object-fit: cover; filter: brightness(0.7);
          animation: scaleImg 2s ease-out forwards;
        }
        
        .hero-txt { 
          position: relative; z-index: 10; color: white; text-align: center; 
          opacity: 0; animation: fadeInUp 1s ease-out 0.5s forwards;
        }
        .hero-txt h2 { 
          font-family: 'Playfair Display', serif; font-size: clamp(50px, 8vw, 90px); 
          font-weight: 700; margin: 0; line-height: 1.1;
        }
        .hero-txt p { 
          font-size: 16px; margin-top: 20px; letter-spacing: 10px; 
          text-transform: uppercase; opacity: 0.8;
        }

        .btn-smart { 
          background: transparent; color: white; border: 1px solid rgba(255,255,255,0.4); 
          padding: 18px 45px; margin-top: 40px; cursor: pointer; 
          font-size: 12px; letter-spacing: 4px; text-transform: uppercase;
          transition: 0.4s ease; overflow: hidden; position: relative;
        }
        .btn-smart:hover { background: #e63946; border-color: #e63946; transform: translateY(-5px); }

        /* --- SMART CARDS --- */
        .tour-section { padding: 120px 8%; background: #fff; }
        .tour-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 50px; }
        
        .smart-card { 
          background: #fff; border-radius: 0; overflow: hidden; 
          transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          border: 1px solid #f0f0f0;
        }
        .smart-card:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(0,0,0,0.08); }
        
        .img-box { height: 400px; background: #f8f8f8; overflow: hidden; position: relative; }
        .img-box:after {
          content: 'VIEW JOURNEY'; position: absolute; inset: 0; 
          background: rgba(22, 22, 22, 0.7); color: white;
          display: flex; align-items: center; justify-content: center;
          letter-spacing: 5px; font-size: 10px; opacity: 0; transition: 0.4s;
        }
        .smart-card:hover .img-box:after { opacity: 1; }

        /* --- FOOTER --- */
        .footer-wrap { background: #111; padding: 80px 8%; color: white; display: flex; justify-content: space-between; align-items: flex-end; }
        .footer-socials a { color: white; font-size: 20px; margin-right: 25px; opacity: 0.5; transition: 0.3s; }
        .footer-socials a:hover { opacity: 1; color: #d4af37; }
      `}</style>

      {/* --- HEADER --- */}
      <header className="header-wrap">
        <a href="/" className="logo-box">
          <i className="fa-solid fa-hotel"></i>
          <h1>Jai Lanka</h1>
        </a>
        <ul className="nav-bar">
          <li><a href="#home">Home</a></li>
          <li><a href="#packages">Destinations</a></li>
          <li><a href="#packages">Experiences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      {/* --- HERO --- */}
      <section className="hero-wrap" id="home">
        <img src={hero1} className="slide-bg" alt="Sri Lanka Smart Look" />
        <div className="hero-txt">
          <p>The Art of Travel</p>
          <h2>Exquisite Ceylon</h2>
          <button className="btn-smart">Explore Now</button>
        </div>
      </section>

      {/* --- TOURS --- */}
      <section className="tour-section" id="packages">
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{ fontSize: '35px', fontWeight: '800', margin: 0 }}>Signature Tours</h3>
          <div style={{ width: '50px', height: '3px', background: '#e63946', marginTop: '15px' }}></div>
        </div>

        <div className="tour-grid">
          {tours.length > 0 ? tours.map((tour) => (
            <div key={tour._id} className="smart-card">
              <div className="img-box"></div>
              <div style={{ padding: '30px' }}>
                <span style={{ color: '#d4af37', fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px' }}>{tour.location}</span>
                <h4 style={{ margin: '10px 0', fontSize: '22px' }}>{tour.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', fontWeight: '800' }}>${tour.price}</span>
                  <i className="fa-solid fa-arrow-right" style={{ color: '#eee' }}></i>
                </div>
              </div>
            </div>
          )) : <p style={{ opacity: 0.3 }}>Loading smart collection...</p>}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer-wrap">
        <div>
          <h2 style={{ letterSpacing: '5px', marginBottom: '10px' }}>JAI LANKA</h2>
          <p style={{ opacity: 0.4, fontSize: '12px' }}>&copy; 2026 Crafted for Excellence.</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="footer-socials" style={{ marginBottom: '20px' }}>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 'bold' }}>+94 77 123 4567</p>
        </div>
      </footer>
    </div>
  );
}

export default App;