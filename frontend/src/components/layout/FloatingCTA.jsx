import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FloatingCTA.css';

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a href="https://wa.me/918696781255" target="_blank" rel="noopener noreferrer" className="cta-item whatsapp" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
      <a href="tel:8696781255" className="cta-item phone" aria-label="Call Now">
        <Phone size={24} />
      </a>
      <Link to="/contact" className="cta-item appointment" aria-label="Book Appointment">
        <Calendar size={24} />
      </Link>
    </div>
  );
};

export default FloatingCTA;
