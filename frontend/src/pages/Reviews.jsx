import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Filter, Heart, MessageCircle, Clock, CalendarCheck } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import TestimonialCard from '../components/ui/TestimonialCard';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { reviewsData } from '../data/reviewsData';
import './Reviews.css';

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Root Canal Treatment', 'Dental Implants', 'General Dentistry', 'Consultation'];

  const filteredReviews = activeFilter === 'All' 
    ? reviewsData 
    : reviewsData.filter(r => r.treatment === activeFilter);

  return (
    <div className="page-container reviews-page">
      <Helmet>
        <title>Patient Reviews | Radiance Dentistry</title>
        <meta name="description" content="Read real patient reviews and experiences at Radiance Dentistry. See why our patients trust Dr. Ruchi Jain with their smile makeovers, root canals, and implants." />
        <link rel="canonical" href="https://radiancedentistry.com/reviews" />
      </Helmet>

      {/* Hero Banner */}
      <section className="reviews-hero premium-gradient text-white text-center">
        <div className="container">
          <FadeInWhenVisible>
            <div className="hero-trust-badge mx-auto mb-30">
              <Star className="icon-gold" fill="currentColor" size={20} />
              <Star className="icon-gold" fill="currentColor" size={20} />
              <Star className="icon-gold" fill="currentColor" size={20} />
              <Star className="icon-gold" fill="currentColor" size={20} />
              <Star className="icon-gold" fill="currentColor" size={20} />
            </div>
            <h1 className="hero-title">Stories of Radiance</h1>
            <p className="hero-subtitle">Real experiences shared by our valued patients. Discover what it means to experience truly premium dental care.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Stats Section */}
      <section className="reviews-stats bg-light">
        <div className="container text-center">
          <FadeInWhenVisible>
            <div className="stats-grid">
              <div className="stat-card glassmorphism">
                <Heart size={32} className="text-gold mb-10" />
                <h3 className="text-navy font-heading text-3xl">500+</h3>
                <p className="text-secondary text-sm m-0">Happy Patients</p>
              </div>
              <div className="stat-card glassmorphism">
                <Star size={32} className="text-gold mb-10" fill="currentColor" />
                <h3 className="text-navy font-heading text-3xl">5.0</h3>
                <p className="text-secondary text-sm m-0">Average Rating</p>
              </div>
              <div className="stat-card glassmorphism">
                <MessageCircle size={32} className="text-gold mb-10" />
                <h3 className="text-navy font-heading text-3xl">100%</h3>
                <p className="text-secondary text-sm m-0">Genuine Feedback</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section all-reviews-section">
        <div className="container">
          <div className="reviews-header flex justify-between align-center flex-wrap mb-40 gap-20">
            <div>
              <h2 className="text-navy mb-10">Patient Feedback</h2>
              <p className="text-secondary m-0">Filter by treatment type to read specific experiences.</p>
            </div>
            <div className="filter-scroll">
              <div className="reviews-filters flex gap-10">
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="reviews-masonry">
            {filteredReviews.map((review, index) => (
              <FadeInWhenVisible key={review.id} delay={index * 0.1} className="review-grid-item">
                <TestimonialCard {...review} />
              </FadeInWhenVisible>
            ))}
          </div>
          
          {filteredReviews.length === 0 && (
            <div className="text-center p-40">
              <p className="text-secondary">No reviews found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Patient Experience Timeline */}
      <section className="section bg-navy text-white text-center experience-timeline-section">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="text-white mb-60">The Radiance Experience</h2>
          </FadeInWhenVisible>
          <div className="timeline-grid">
            <FadeInWhenVisible className="timeline-item">
              <div className="timeline-icon"><CalendarCheck size={32} /></div>
              <h4>Easy Booking</h4>
              <p className="text-light text-sm">Schedule at your convenience.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="timeline-item">
              <div className="timeline-icon"><MessageCircle size={32} /></div>
              <h4>Consultation</h4>
              <p className="text-light text-sm">Clear, honest treatment planning.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4} className="timeline-item">
              <div className="timeline-icon"><Heart size={32} /></div>
              <h4>Comfortable Care</h4>
              <p className="text-light text-sm">Pain-free, luxury treatment.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.6} className="timeline-item">
              <div className="timeline-icon"><Star size={32} /></div>
              <h4>Radiant Smile</h4>
              <p className="text-light text-sm">Leave with confidence.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2 className="text-navy">Frequently Asked Questions</h2>
            <p className="mb-40 text-secondary">Common questions about the patient experience.</p>
          </FadeInWhenVisible>
          <div className="max-w-800 mx-auto text-left">
            <FadeInWhenVisible className="glassmorphism p-30 mb-20 rounded-xl bg-white shadow-sm">
              <h4 className="text-navy mb-10">Are these reviews real?</h4>
              <p className="text-secondary m-0">Absolutely. Every review displayed here is a genuine testimonial left by actual patients of Radiance Dentistry on our Google Business Profile.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="glassmorphism p-30 mb-20 rounded-xl bg-white shadow-sm">
              <h4 className="text-navy mb-10">Can I leave a review?</h4>
              <p className="text-secondary m-0">We love hearing from our patients! After your appointment, you will receive a link to share your experience on our Google page.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section premium-gradient text-white text-center cta-section">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="mb-20 text-white">Experience It For Yourself</h2>
            <p className="mb-40 max-w-700 mx-auto text-light">Join hundreds of happy patients who have trusted Radiance Dentistry with their smiles. Schedule your premium consultation today.</p>
            <KnowMoreBtn to="/contact" text="Book Your Appointment" variant="gold" />
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
