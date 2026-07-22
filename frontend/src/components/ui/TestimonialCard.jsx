import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, rating, date, text, treatment }) => {
  // Generate a random avatar color based on the name
  const colors = ['#1e3a5f', '#d4af37', '#5a7184', '#2c3e50'];
  const charCode = name.charCodeAt(0) || 0;
  const bgColor = colors[charCode % colors.length];
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="testimonial-card premium-hover glassmorphism-border">
      <div className="card-top-row">
        <div className="rating-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className={i < rating ? 'star-filled' : 'star-empty'} fill={i < rating ? 'currentColor' : 'none'} />
          ))}
        </div>
        {date && <span className="review-date text-xs text-secondary">{date}</span>}
      </div>
      
      <div className="testimonial-header mt-15">
        <div className="avatar" style={{ backgroundColor: bgColor }}>
          {initial}
        </div>
        <div className="reviewer-info">
          <h4>{name}</h4>
          <div className="review-meta">
            <span className="verified-badge text-gold">
              <CheckCircle2 size={12} className="verified-icon" />
              Verified Patient
            </span>
          </div>
        </div>
      </div>

      <p className="testimonial-text mt-15">"{text}"</p>
      
      {treatment && (
        <div className="treatment-tag mt-15">
          <span className="tag-text">{treatment}</span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
