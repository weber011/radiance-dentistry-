import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import CaseStudyCard from '../components/ui/CaseStudyCard';
import ImageLightbox from '../components/ui/ImageLightbox';
import { fullGalleryData } from '../data/gallery';
import './SmileGallery.css';


const filters = [
  { label: 'All Cases', value: 'all' },
  { label: 'Smile Makeovers', value: 'veneers' },
  { label: 'Dental Implants', value: 'implants' },
  { label: 'Teeth Whitening', value: 'whitening' },
  { label: 'Orthodontics', value: 'ortho' },
  { label: 'Restorations', value: 'crowns' }
];

const SmileGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGallery = activeFilter === 'all' 
    ? fullGalleryData 
    : fullGalleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Smile Gallery | Radiaance Dentistry",
    "description": "Explore real patient journeys and discover how personalized dental care transformed their smiles with confidence.",
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Cosmetic Dentistry"
    }
  };

  return (
    <div className="page-container smile-gallery-page">
      <Helmet>
        <title>Smile Transformations | Radiaance Dentistry</title>
        <meta name="description" content="View real patient transformations at Radiaance Dentistry. Explore our premium case studies for dental implants, veneers, teeth whitening, and smile makeovers." />
        <link rel="canonical" href="https://www.radiaancedentistry.com/smile-gallery" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg"></div>
        <div className="gallery-hero-overlay"></div>
        <div className="container text-center text-white gallery-hero-content">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-gold">PATIENT SUCCESS</h4>
            <h1 className="hero-title">Real Smile Transformations</h1>
            <p className="hero-subtitle max-w-700 mx-auto">Witness the artistry of modern dentistry through our life-changing patient case studies. Every smile tells a story of restored confidence.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Full Smile Gallery Grid */}
      <section className="section full-gallery-section bg-light">
        <div className="container">
          <FadeInWhenVisible>
            <div className="gallery-filters">
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
          </FadeInWhenVisible>

          <div className="case-study-grid mt-50">
            {filteredGallery.map((item, index) => (
              <FadeInWhenVisible key={item.id} delay={index * 0.05}>
                <CaseStudyCard 
                  data={item} 
                  index={index}
                  onImageClick={openLightbox}
                />
              </FadeInWhenVisible>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center mt-50 mb-50">
              <p className="text-secondary text-lg">More transformation cases coming soon for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Component */}
      <ImageLightbox 
        images={filteredGallery} 
        currentIndex={lightboxIndex} 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default SmileGallery;
