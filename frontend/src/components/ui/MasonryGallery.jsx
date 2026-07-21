import React from 'react';
import { Maximize2 } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import './MasonryGallery.css';

const MasonryGallery = ({ images, onImageClick }) => {
  return (
    <div className="masonry-gallery-container">
      {images.map((img, idx) => (
        <FadeInWhenVisible key={img.id || idx} delay={idx * 0.05} className="masonry-item">
          <div className="masonry-image-wrapper" onClick={() => onImageClick(idx)}>
            <img 
              src={img.src} 
              alt={img.treatment || 'Smile Transformation'} 
              loading="lazy"
              className="masonry-img"
            />
            <div className="masonry-overlay">
              <span className="masonry-treatment-tag">{img.treatment}</span>
              <button className="masonry-zoom-btn" aria-label="View larger image">
                <Maximize2 size={24} />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  );
};

export default MasonryGallery;
