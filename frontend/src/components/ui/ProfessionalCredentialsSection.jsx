import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Award, BookOpen, Star, ShieldCheck, Search } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import ImageLightbox from './ImageLightbox';
import KnowMoreBtn from './KnowMoreBtn';
import './ProfessionalCredentialsSection.css';

const rawCertificates = [
  {
    id: "c3",
    src: "/assets/c3.jpeg",
    title: "Academic of Excellence",
    institution: "K.L.E.S institute of dental science Belgaum",
    year: "2003-04",
    desc: "Awarded for 2nd Position in the Endo-Poster division."
  },
  {
    id: "c2",
    src: "/assets/c2.jpeg",
    title: "Level 1 Workshop on Endodontics",
    institution: "DENTSPLY Academy",
    year: "2008",
    desc: "Advanced Training at PDIC's Center for Endodontics."
  },
  {
    id: "c1",
    src: "/assets/c1.jpeg",
    title: "Certificate of Appreciation",
    institution: "SM Art & CAADS",
    year: "2023",
    desc: "For contributing to free health check-up camps."
  },
  {
    id: "c1-new",
    src: "/assets/certi1.jpeg",
    title: "Professional Certification",
    institution: "Dental Academy",
    year: "Recent",
    desc: "Recognized for excellence in advanced dentistry."
  },
  {
    id: "c2-new",
    src: "/assets/certi2.jpeg",
    title: "Advanced Dental Training",
    institution: "Dental Academy",
    year: "Recent",
    desc: "Completed comprehensive training in modern dental techniques."
  }
];

// Deduplicate based on ID
const certificates = Array.from(new Map(rawCertificates.map(c => [c.id, c])).values());

const trustBadges = [
  { icon: <Award size={26} />, title: "Internationally Certified Dentist" },
  { icon: <BookOpen size={26} />, title: "Continuous Professional Education" },
  { icon: <Star size={26} />, title: "Advanced Cosmetic Dentistry" },
  { icon: <ShieldCheck size={26} />, title: "Recognized Excellence" },
];

const ProfessionalCredentialsSection = ({ hideProfileBtn = false }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const trackRef = useRef(null);
  
  // Responsiveness for Carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = certificates.length;
  // If fewer certificates than itemsPerView, maxIndex is 0
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isHovered || totalItems <= itemsPerView) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, nextSlide, totalItems, itemsPerView]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Ruchi Jain",
    "jobTitle": "Chief Dental Surgeon",
    "image": "https://radiaancedentistry.com/assets/doctor%20pic.jpeg",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Radiaance Dentistry"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "K.L.E.S institute of dental science Belgaum"
    }
  };

  // Determine transform offset
  const offset = -(currentIndex * (100 / itemsPerView));

  return (
    <section className="section credentials-luxury-section bg-luxury-light">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>

      {/* Decorative Background */}
      <div className="luxury-bg-pattern"></div>
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-50">
          <FadeInWhenVisible>
            <div className="badge-gold mb-15 mx-auto">PROFESSIONAL EXCELLENCE</div>
            <h2 className="text-navy">Certifications & Professional Recognition</h2>
            <p className="max-w-700 mx-auto text-body">
              Our commitment to advanced dental education, internationally recognized certifications, and continuous professional excellence ensures every patient receives world-class dental care.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Premium Trust Badges */}
        <div className="trust-badges-row mb-60">
          {trustBadges.map((badge, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.1} className="premium-trust-badge glassmorphism">
              <div className="badge-icon-wrapper text-gold">{badge.icon}</div>
              <h4 className="text-navy m-0 text-center text-sm font-semibold">{badge.title}</h4>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Horizontal Carousel Section */}
        <FadeInWhenVisible delay={0.2} className="carousel-container-wrapper">
          <div 
            className="carousel-viewport" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              className="carousel-track"
              ref={trackRef}
              animate={{ x: `${offset}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }}
              drag="x"
              dragConstraints={trackRef}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  nextSlide();
                } else if (swipe > 50) {
                  prevSlide();
                }
              }}
            >
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="carousel-slide" 
                  style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                >
                  <div 
                    className="certificate-card glassmorphism"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="cert-image-wrapper">
                      <img src={cert.src} alt={cert.title} loading="lazy" />
                      <div className="cert-hover-overlay">
                        <Search size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="cert-info">
                      <h3 className="text-navy m-0 text-base">{cert.title}</h3>
                      <p className="text-secondary font-medium text-sm mt-5 m-0">{cert.institution}</p>
                      {cert.year && <p className="text-muted text-xs mt-5 m-0">Year: {cert.year}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Navigation */}
          {totalItems > itemsPerView && (
            <div className="carousel-controls mt-40">
              <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous certificates">
                <ChevronLeft size={24} />
              </button>
              <div className="carousel-pagination">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next certificates">
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </FadeInWhenVisible>

        {/* CTAs */}
        <div className="text-center flex-center gap-20 mt-60">
          {!hideProfileBtn && (
            <KnowMoreBtn to="/doctor/dr-ruchi-jain" text="Meet Dr. Ruchi Jain" variant="outline" className="btn-outline-navy" />
          )}
          <KnowMoreBtn to="/contact" text="Book Appointment" variant="primary" />
        </div>

      </div>

      {/* Lightbox for Certificates */}
      <ImageLightbox 
        images={certificates.map(cert => ({ src: cert.src, caption: `${cert.title} • ${cert.institution}` }))}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % certificates.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
      />
    </section>
  );
};

export default ProfessionalCredentialsSection;
