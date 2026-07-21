import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/assets/logo.png" alt="Radiance Dentistry Logo" />
            </Link>
            <p className="brand-desc">
              Experience the pinnacle of luxury dental care. Where advanced technology meets elegant comfort.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Clinic</Link></li>
              <li><Link to="/doctor">Meet Our Doctor</Link></li>
              <li><Link to="/services">Treatments</Link></li>
              <li><Link to="/smile-gallery">Smile Gallery</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Treatments</h3>
            <ul>
              <li><Link to="/services">Cosmetic Dentistry</Link></li>
              <li><Link to="/services">Dental Implants</Link></li>
              <li><Link to="/services">Invisalign</Link></li>
              <li><Link to="/services">Teeth Whitening</Link></li>
              <li><Link to="/services">Root Canal</Link></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <MapPin size={20} />
              <p>123 Luxury Avenue, Premium Medical Hub, City, State 12345</p>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <p>+1 (234) 567-8900</p>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <p>hello@radiancedentistry.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Radiance Dentistry. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/placeholder">Privacy Policy</Link>
            <Link to="/placeholder">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
