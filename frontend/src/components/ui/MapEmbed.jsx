import React from 'react';
import './MapEmbed.css';

const MapEmbed = () => {
  // Coordinates for Western Business Park, Vesu, Surat (Approximate)
  const mapQuery = "Western Business Park, Vesu, Surat, Gujarat 395007";
  
  return (
    <div className="map-embed-container premium-hover">
      <iframe
        title="Radiaance Dentistry Location"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      ></iframe>
      <div className="map-overlay-link">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Western+Business+Park,+Vesu,+Surat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="open-map-btn"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapEmbed;
