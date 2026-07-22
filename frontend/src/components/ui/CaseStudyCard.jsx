import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import './CaseStudyCard.css';

const CaseStudyCard = ({ data, onImageClick, index }) => {
  return (
    <div className="case-study-card glassmorphism premium-hover">
      <div 
        className="csc-image-wrapper" 
        onClick={() => onImageClick && onImageClick(index)}
        style={{ cursor: onImageClick ? 'pointer' : 'default' }}
      >
        <img 
          src={data.src} 
          alt={`${data.treatment} Transformation`} 
          className="csc-image" 
          loading="lazy" 
        />
        <div className="csc-badge">Before & After</div>
      </div>
      
      <div className="csc-content">
        <h3>{data.treatment}</h3>
        <p className="csc-summary">{data.summary}</p>
        
        {data.duration && (
          <div className="csc-meta">
            <Clock size={14} className="text-gold" />
            <span>Duration: {data.duration}</span>
          </div>
        )}

        <div className="csc-actions">
          <Link to={`/treatments/${data.slug}`} className="btn-link text-navy text-sm font-medium">
            Know More <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-primary-sm">
            <Calendar size={14} /> Book Consult
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
