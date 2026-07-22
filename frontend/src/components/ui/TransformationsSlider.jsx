import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CaseStudyCard from './CaseStudyCard';
import './TransformationsSlider.css';

const TransformationsSlider = ({ cases }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth / getCardsPerView();
      const index = Math.round(scrollPosition / cardWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 2;
      if (window.innerWidth >= 768) return 1.5;
    }
    return 1;
  };

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / getCardsPerView();
      scrollRef.current.scrollBy({
        left: direction === 'next' ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / getCardsPerView();
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="transformations-slider-container">
      <div className="slider-navigation">
        <button className="nav-btn prev-btn" onClick={() => scrollByAmount('prev')} aria-label="Previous cases">
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn next-btn" onClick={() => scrollByAmount('next')} aria-label="Next cases">
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div 
        className="transformations-scroll-track" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {cases.map((item, idx) => (
          <div key={idx} className="transformations-slide">
            <CaseStudyCard data={item} />
          </div>
        ))}
      </div>

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
