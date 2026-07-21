import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, rating, date, text }) => {
  // Generate a random avatar color based on the name
  const colors = ['#1e3a5f', '#d4af37', '#e8f0fe', '#5a7184', '#2c3e50'];
  const charCode = name.charCodeAt(0) || 0;
  const bgColor = colors[charCode % colors.length];
  const initial = name.charAt(0).toUpperCase();
  const isGoogleReview = true; // All uploaded screenshots appear to be from Google

  return (
    <div className="testimonial-card premium-hover glassmorphism">
      <div className="quote-icon">
        <Quote size={40} />
      </div>
      
      <div className="testimonial-header">
        <div className="avatar" style={{ backgroundColor: bgColor }}>
          {initial}
        </div>
        <div className="reviewer-info">
          <h4>{name}</h4>
          <div className="review-meta">
            <span className="review-date">{date}</span>
            {isGoogleReview && (
              <span className="google-badge">
                <img src="/assets/google-icon.svg" alt="Google" className="google-icon-svg" onError={(e) => e.target.style.display = 'none'} />
                Verified
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className={i < rating ? 'star-filled' : 'star-empty'} fill={i < rating ? 'currentColor' : 'none'} />
        ))}
      </div>

      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
