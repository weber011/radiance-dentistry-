import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <button className="lightbox-nav prev" onClick={onPrev}>
              <ChevronLeft size={32} />
            </button>

            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="lightbox-image-container"
            >
              <img src={currentImage.src} alt={currentImage.caption || "Gallery Image"} className="lightbox-image" />
              {(currentImage.treatment || currentImage.caption) && (
                <div className="lightbox-caption">
                  {currentImage.treatment && <h4>{currentImage.treatment}</h4>}
                  {currentImage.caption && <p>{currentImage.caption}</p>}
                </div>
              )}
            </motion.div>

            <button className="lightbox-nav next" onClick={onNext}>
              <ChevronRight size={32} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
