import React, { useState, useRef, useEffect } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import './TransformationsSlider.css';

const TransformationsSlider = ({ cases }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll events to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      // Calculate which card is mostly in view
      const index = Math.round(scrollPosition / cardWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  // Scroll to specific index on dot click
  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="transformations-slider-container">
      <div 
        className="transformations-scroll-track" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {cases.map((item, idx) => (
          <div key={idx} className="transformations-slide">
            <BeforeAfterSlider 
              afterImage={item.afterImage}
              beforeImage={item.beforeImage}
              treatmentName={item.treatmentName}
              description={item.description}
              treatmentSlug={item.treatmentSlug}
              fallbackToFilter={true}
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="slider-dots mt-30">
        {cases.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TransformationsSlider;
