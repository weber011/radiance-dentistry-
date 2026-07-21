import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { treatmentsList } from '../data/treatments';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container services-page">
      <Helmet>
        <title>Our Services | Radiance Dentistry</title>
        <meta name="description" content="Explore our comprehensive range of premium dental treatments at Radiance Dentistry." />
      </Helmet>

      {/* Hero Section */}
      <section className="services-hero text-center bg-navy text-white relative">
        <div className="container relative z-10">
          <FadeInWhenVisible>
            <h1 className="text-gold mb-20">Premium Dental Services</h1>
            <p className="max-w-700 mx-auto text-light">
              From preventive care to complete smile transformations, we offer world-class treatments tailored to your unique needs using state-of-the-art technology.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="treatments-grid">
            {treatmentsList.map((treatment, idx) => (
              <FadeInWhenVisible key={idx} className="treatment-card premium-hover">
                <div className="treatment-img-wrapper">
                  <img src={`/assets/${treatment.image}`} alt={treatment.name} loading="lazy" />
                  <div className="treatment-overlay-gradient"></div>
                </div>
                <div className="treatment-content">
                  <h3>{treatment.name}</h3>
                  <p>{treatment.desc}</p>
                  <div className="treatment-actions">
                    <Link to={`/treatments/${treatment.slug}`} className="btn-know-more text-gold">
                      Know More <ChevronRight size={16} />
                    </Link>
                    <KnowMoreBtn to="/contact" text="Book Appointment" variant="outline" className="btn-sm" />
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-navy text-white text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="text-gold mb-20">Not sure which treatment is right for you?</h2>
            <p className="max-w-700 mx-auto mb-40 text-light">
              Schedule a consultation with Dr. Ruchi Jain to get a personalized treatment plan tailored to your smile.
            </p>
            <KnowMoreBtn to="/contact" text="Book a Consultation" variant="gold" />
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default Services;
