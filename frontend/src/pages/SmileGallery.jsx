import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Maximize2, Star, CheckCircle2 } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import ImageLightbox from '../components/ui/ImageLightbox';
import './SmileGallery.css';

const fullGalleryData = [
  { id: 1, src: '/assets/smile gallery 1.jpeg', treatment: 'Smile Makeover', category: 'veneers' },
  { id: 2, src: '/assets/smile gallery2.jpeg', treatment: 'Dental Implants', category: 'implants' },
  { id: 3, src: '/assets/smile galler3.jpeg', treatment: 'Teeth Whitening', category: 'whitening' },
  { id: 4, src: '/assets/smile gallery4.jpeg', treatment: 'Orthodontics', category: 'ortho' },
  { id: 5, src: '/assets/smile gallery5.jpeg', treatment: 'Dental Crowns', category: 'crowns' },
  { id: 6, src: '/assets/smile gallery6.jpeg', treatment: 'Smile Makeover', category: 'veneers' },
  { id: 7, src: '/assets/smile galeery7.jpeg', treatment: 'Dental Veneers', category: 'veneers' },
  { id: 8, src: '/assets/smilegallery8.jpeg', treatment: 'Full Mouth Rehab', category: 'implants' },
  { id: 9, src: '/assets/smilegallery.jpeg', treatment: 'Smile Design', category: 'veneers' }
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Veneers', value: 'veneers' },
  { label: 'Implants', value: 'implants' },
  { label: 'Whitening', value: 'whitening' },
  { label: 'Orthodontics', value: 'ortho' }
];

const SmileGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredGallery = activeFilter === 'all' 
    ? fullGalleryData 
    : fullGalleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="page-container smile-gallery-page">
      <Helmet>
        <title>Smile Gallery | Radiance Dentistry Transformations</title>
        <meta name="description" content="View real patient transformations at Radiance Dentistry. Explore our before & after gallery for dental implants, veneers, teeth whitening, and smile makeovers." />
        <link rel="canonical" href="https://radiancedentistry.com/smile-gallery" />
      </Helmet>

      {/* Hero Banner */}
      <section className="gallery-hero premium-gradient">
        <div className="container text-center text-white">
          <FadeInWhenVisible>
            <h1 className="hero-title">Real Patients. Real Results.</h1>
            <p className="hero-subtitle">Witness the artistry of modern dentistry through our life-changing smile transformations.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Featured Transformations (Before & After) */}
      <section className="section bg-light featured-transformations">
        <div className="container">
          <FadeInWhenVisible>
            <div className="text-center mb-60">
              <h2 className="text-navy">Featured Case Studies</h2>
              <p className="max-w-700 mx-auto">Interactive comparisons of our most comprehensive smile makeovers.</p>
            </div>
          </FadeInWhenVisible>

          <div className="ba-grid">
            <FadeInWhenVisible>
              <BeforeAfterSlider 
                afterImage="/assets/smile makover.png"
                treatmentName="Smile Makeover"
                description="Complete smile transformation using custom porcelain veneers to correct discoloration, gaps, and misalignment."
                treatmentSlug="smile-makeover"
                fallbackToFilter={true}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <BeforeAfterSlider 
                afterImage="/assets/dental_implants.png"
                treatmentName="Implant Restoration"
                description="Full arch restoration using precision-placed dental implants and custom ceramic crowns."
                treatmentSlug="dental-implants"
                fallbackToFilter={true}
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Full Smile Gallery Grid */}
      <section className="section full-gallery-section">
        <div className="container">
          <div className="text-center mb-40">
            <h2 className="text-navy">Comprehensive Gallery</h2>
            <p>Filter by treatment to see specific results.</p>
            
            <div className="gallery-filters mt-30">
              {filters.map(filter => (
                <button 
                  key={filter.value}
                  className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-masonry">
            {filteredGallery.map((item, index) => (
              <FadeInWhenVisible key={item.id} className="gallery-masonry-item">
                <div className="gallery-card glassmorphism premium-hover">
                  <div className="gallery-card-image-wrapper" onClick={() => openLightbox(index)}>
                    <img src={item.src} alt={item.treatment} loading="lazy" />
                    <div className="gallery-card-overlay">
                      <Maximize2 size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="gallery-card-content p-15 text-center">
                    <h4 className="text-navy text-sm font-semibold">{item.treatment}</h4>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="section bg-navy text-white">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>Patient Success Stories</h2>
            <p className="text-light mb-40">Hear from those whose lives have been transformed.</p>
          </FadeInWhenVisible>
          
          <div className="testimonial-grid">
            <FadeInWhenVisible className="testimonial-card glassmorphism-dark">
              <Star className="text-gold mb-20" size={24} />
              <p className="quote">"Getting veneers at Radiance was the best decision I've ever made. My confidence is through the roof."</p>
              <h4>- Michael T.</h4>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="testimonial-card glassmorphism-dark">
              <Star className="text-gold mb-20" size={24} />
              <p className="quote">"The digital smile design process showed me exactly what to expect. The actual results were even better."</p>
              <h4>- Emily R.</h4>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>Frequently Asked Questions</h2>
            <p className="mb-40">Understanding your transformation journey.</p>
          </FadeInWhenVisible>
          <div className="max-w-800 mx-auto text-left">
            <FadeInWhenVisible className="glassmorphism p-30 mb-20 rounded-xl">
              <h4 className="text-navy mb-10">How long does a smile makeover take?</h4>
              <p className="text-secondary">It depends on the treatments involved. A simple whitening takes an hour, while comprehensive veneer cases typically require 2-3 visits over a few weeks.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="glassmorphism p-30 mb-20 rounded-xl">
              <h4 className="text-navy mb-10">Can I see my results before starting?</h4>
              <p className="text-secondary">Yes! Using Digital Smile Design (DSD), we create a digital and physical mockup so you can "test drive" your new smile before any treatment begins.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section premium-gradient text-white text-center cta-section">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="mb-20">Ready for Your Transformation?</h2>
            <p className="mb-40 max-w-700 mx-auto">Schedule a comprehensive consultation with our specialists to discuss your goals and discover what's possible for your smile.</p>
            <KnowMoreBtn to="/contact" text="Book Your Consultation" variant="gold" />
          </FadeInWhenVisible>
        </div>
      </section>

      <ImageLightbox 
        images={filteredGallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex(prev => prev === filteredGallery.length - 1 ? 0 : prev + 1)}
        onPrev={() => setLightboxIndex(prev => prev === 0 ? filteredGallery.length - 1 : prev - 1)}
      />
    </div>
  );
};

export default SmileGallery;
