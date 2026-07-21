import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeftRight } from 'lucide-react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  treatmentName, 
  description, 
  treatmentSlug = 'smile-makeover',
  fallbackToFilter = false
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div className="ba-card glassmorphism premium-hover">
      <div 
        className="ba-image-container"
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt={`${treatmentName} After`} 
          className="ba-image ba-image-after" 
          loading="lazy"
        />
        <div className="ba-label after-label">After</div>

        {/* Before Image (Foreground, clipped) */}
        <div 
          className="ba-image-before-wrapper" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage || afterImage} 
            alt={`${treatmentName} Before`} 
            className={`ba-image ba-image-before ${fallbackToFilter ? 'ba-filter-fallback' : ''}`}
            loading="lazy"
          />
          <div className="ba-label before-label">Before</div>
        </div>

        {/* Draggable Handle */}
        <div 
          className="ba-handle" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="ba-handle-line"></div>
          <div className="ba-handle-button">
            <ArrowLeftRight size={16} />
          </div>
        </div>
      </div>

      <div className="ba-content">
        <h3>{treatmentName}</h3>
        <p>{description}</p>
        
        <div className="ba-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">Book Appointment</Link>
          <Link to={`/treatments/${treatmentSlug}`} className="btn-link">
            Know More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
