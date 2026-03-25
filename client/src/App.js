import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Backend එකෙන් tours ටික ඉල්ලනවා
    axios.get('http://localhost:5000/api/tours/all')
      .then(response => {
        setTours(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1 style={{ color: '#007bff' }}>Jai Lanka Travels</h1>
      <h2>Available Tour Packages</h2>
      <hr />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {tours.length > 0 ? (
          tours.map(tour => (
            <div key={tour._id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#333' }}>{tour.title}</h3>
              <p style={{ color: '#666' }}>{tour.description}</p>
              <p><strong>Price:</strong> ${tour.price}</p>
              <p><strong>Location:</strong> {tour.location}</p>
              <button style={{ backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
            </div>
          ))
        ) : (
          <p>No tours available right now. Please check back later!</p>
        )}
      </div>
    </div>
  );
}

export default App;