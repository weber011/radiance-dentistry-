import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardsToShow = isMobile ? 1 : 3;
  const totalCards = reviews.length;
  const maxIndex = Math.max(0, totalCards - cardsToShow);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex, isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) {
      handleNext();
    } else if (swipe > 50) {
      handlePrev();
    }
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const idx = (currentIndex + i) % totalCards;
      visible.push(reviews[idx]);
    }
    return visible;
  };

  return (
    <div 
      className="testimonial-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-header mb-20 text-right">
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev} aria-label="Previous review">
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-btn" onClick={handleNext} aria-label="Next review">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="testimonial-carousel-viewport">
        <motion.div
          className="testimonial-carousel-track"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {getVisibleCards().map((review, i) => (
              <motion.div
                key={`${review.id}-${currentIndex}-${i}`}
                className="testimonial-card-wrapper"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <TestimonialCard {...review} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
