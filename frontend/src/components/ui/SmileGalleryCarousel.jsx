import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';
import './SmileGalleryCarousel.css';

const galleryData = [
  { id: 1, src: '/assets/smile gallery 1.jpeg', treatment: 'Smile Makeover', caption: 'Complete smile design with veneers.' },
  { id: 2, src: '/assets/smile gallery2.jpeg', treatment: 'Dental Implants', caption: 'Full arch restoration.' },
  { id: 3, src: '/assets/smile galler3.jpeg', treatment: 'Teeth Whitening', caption: 'Professional laser whitening.' },
  { id: 4, src: '/assets/smile gallery4.jpeg', treatment: 'Orthodontics', caption: 'Clear aligner therapy completion.' },
  { id: 5, src: '/assets/smile gallery5.jpeg', treatment: 'Dental Crowns', caption: 'Ceramic crowns for anterior teeth.' },
  { id: 6, src: '/assets/smile gallery6.jpeg', treatment: 'Smile Makeover', caption: 'Gummy smile correction and veneers.' },
  { id: 7, src: '/assets/smile galeery7.jpeg', treatment: 'Dental Veneers', caption: 'Porcelain veneers to close gaps.' },
  { id: 8, src: '/assets/smilegallery8.jpeg', treatment: 'Full Mouth Rehab', caption: 'Restoration of function and aesthetics.' },
  { id: 9, src: '/assets/smilegallery.jpeg', treatment: 'Smile Design', caption: 'Customized digital smile design.' }
];

const SmileGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const trackRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    if (isHovered || lightboxOpen) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, lightboxOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Calculate translation based on current index
  const getTransform = () => {
    if (!trackRef.current) return 'translateX(0)';
    // In a real responsive scenario, we'd calculate exact card width + gap. 
    // Here we use a CSS variable based approach or percentage
    // Assuming each card takes up about 300px + 30px gap = 330px
    return `translateX(-${currentIndex * 330}px)`;
  };

  return (
    <>
      <div 
        className="gallery-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-header">
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={handlePrev}><ChevronLeft size={24} /></button>
            <button className="carousel-btn" onClick={handleNext}><ChevronRight size={24} /></button>
          </div>
        </div>

        <div className="carousel-viewport">
          <div 
            className="carousel-track" 
            ref={trackRef}
            style={{ transform: getTransform() }}
          >
            {galleryData.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="gallery-card glassmorphism premium-hover"
                whileHover={{ y: -5 }}
              >
                <div className="gallery-card-image-wrapper" onClick={() => openLightbox(index)}>
                  <img src={item.src} alt={item.treatment} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <Maximize2 size={32} className="text-white" />
                  </div>
                </div>
                <div className="gallery-card-content">
                  <h4 className="text-gold">{item.treatment}</h4>
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox 
        images={galleryData}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex(prev => prev === galleryData.length - 1 ? 0 : prev + 1)}
        onPrev={() => setLightboxIndex(prev => prev === 0 ? galleryData.length - 1 : prev - 1)}
      />
    </>
  );
};

export default SmileGalleryCarousel;
