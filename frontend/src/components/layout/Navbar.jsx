import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glassmorphism' : ''} ${!isHome ? 'solid-bg' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo.png" alt="Radiance Dentistry Logo" />
        </Link>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Clinic</Link>
          <Link to="/doctor" className="nav-link">Our Doctor</Link>
          
          <div className="nav-dropdown">
            <button className="nav-link dropdown-toggle">
              Treatments <ChevronDown size={16} />
            </button>
            <div className="dropdown-menu">
              <Link to="/services" className="dropdown-item">All Services</Link>
              <Link to="/advanced-technology" className="dropdown-item">Advanced Technology</Link>
              <Link to="/smile-gallery" className="dropdown-item">Smile Gallery</Link>
            </div>
          </div>

          <Link to="/reviews" className="nav-link">Patient Stories</Link>
          <Link to="/faqs" className="nav-link">FAQs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          <Link to="/contact" className="btn-primary mobile-only-btn">Book Appointment</Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary desktop-btn">Book Appointment</Link>
          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'menu-open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
