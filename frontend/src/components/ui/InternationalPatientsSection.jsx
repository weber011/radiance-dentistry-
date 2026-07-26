import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Building2, Monitor, FileText, ShieldCheck, Headphones, Map, Quote } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import KnowMoreBtn from './KnowMoreBtn';
import './InternationalPatientsSection.css';

const trustFeatures = [
  { icon: <Plane size={24} />, title: 'Airport Pickup Assistance' },
  { icon: <Building2 size={24} />, title: 'Accommodation Guidance' },
  { icon: <Monitor size={24} />, title: 'Online Consultation' },
  { icon: <FileText size={24} />, title: 'Personalized Planning' },
  { icon: <ShieldCheck size={24} />, title: 'International Standards' },
  { icon: <Headphones size={24} />, title: 'Post-Treatment Support' }
];

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
                src="/assets/international-patient-hero.jpg" 
                alt="Dr. Ruchi Jain with International Patient" 
                className="intl-hero-img"
                onError={(e) => { e.target.src = '/assets/doctor pic.jpeg'; }}
              />
              <div className="intl-hero-overlay glassmorphism">
                <p className="m-0 text-white font-medium">Your Smile. Our Expertise. No Boundaries.</p>
                <h4 className="text-gold m-0 mt-5">Welcome to Radiaance Dentistry.</h4>
              </div>
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

            {/* Trust Features Grid */}
            <div className="intl-trust-grid mb-40">
              {trustFeatures.map((feature, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                  <div className="trust-card premium-hover">
                    <div className="trust-icon text-primary">{feature.icon}</div>
                    <h5 className="trust-title text-navy">{feature.title}</h5>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>

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
