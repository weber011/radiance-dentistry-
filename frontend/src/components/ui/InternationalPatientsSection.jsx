import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Building2, Monitor, FileText, ShieldCheck, Headphones, Map, Quote } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import KnowMoreBtn from './KnowMoreBtn';
import './InternationalPatientsSection.css';

const trustFeatures = [];

const InternationalPatientsSection = () => {
  return (
    <section className="section intl-premium-section">
      <div className="intl-map-watermark">
        <Map size={800} strokeWidth={0.5} />
      </div>

      <div className="container relative z-10">
        <div className="intl-premium-grid">
          
          {/* Left: Image Hero */}
          <FadeInWhenVisible className="intl-hero-col">
            <div className="intl-hero-wrapper luxury-radius">
              <img 
                src="/assets/international patient.png" 
                alt="Dr. Ruchi Jain with International Patient" 
                className="intl-hero-img"
                onError={(e) => { e.target.src = '/assets/doctor pic.jpeg'; }}
              />
            </div>
          </FadeInWhenVisible>

          {/* Right: Content */}
          <div className="intl-content-col">
            <FadeInWhenVisible>
              <div className="badge-gold mb-15 inline-flex items-center gap-2">
                <span className="text-lg">🌍</span> INTERNATIONAL PATIENT CARE
              </div>
              <h2 className="text-navy mb-20 font-playfair">Trusted by Patients Across the World</h2>
              <p className="text-secondary text-lg mb-40">
                Experience world-class dental care with advanced technology, personalized treatment, and compassionate care. From your first online consultation to your final follow-up, we ensure a seamless and comfortable journey for every international patient.
              </p>
            </FadeInWhenVisible>

            {/* Testimonial */}
            <FadeInWhenVisible delay={0.3}>
              <div className="intl-testimonial-card glassmorphism-subtle mb-40">
                <Quote className="text-gold mb-15 opacity-50" size={32} />
                <p className="testimonial-text text-navy italic font-medium text-lg mb-15">
                  "Traveling to India for my dental treatment was the best decision. Dr. Ruchi Jain and her team made the entire experience smooth, comfortable, and stress-free. I am delighted with my new smile."
                </p>
                <p className="testimonial-author text-secondary font-semibold m-0">— International Patient</p>
              </div>
            </FadeInWhenVisible>

            {/* CTAs */}
            <FadeInWhenVisible delay={0.4}>
              <div className="intl-cta-group">
                <KnowMoreBtn to="/contact" text="Book Online Consultation" variant="primary" />
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-outline-navy flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all" style={{ textDecoration: 'none' }}>
                   Contact on WhatsApp
                </a>
              </div>
            </FadeInWhenVisible>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InternationalPatientsSection;
