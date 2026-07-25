import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import './ImageLightbox.css';

const ImageLightbox = ({ images, currentIndex = 0, isOpen, onClose, onNext, onPrev, imageSrc, altText }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
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

  let currentImage = null;
  let hasNav = false;

  if (images && images.length > 0) {
    currentImage = images[currentIndex] || images[0];
    hasNav = images.length > 1;
  } else if (imageSrc) {
    currentImage = { src: imageSrc, caption: altText };
    hasNav = false;
  }

  if (!currentImage) return null;

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
            
            {hasNav && onPrev && (
              <button className="lightbox-nav prev" onClick={onPrev}>
                <ChevronLeft size={32} />
              </button>
            )}

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

            {hasNav && onNext && (
              <button className="lightbox-nav next" onClick={onNext}>
                <ChevronRight size={32} />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
