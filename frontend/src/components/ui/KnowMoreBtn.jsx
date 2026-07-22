import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './KnowMoreBtn.css';

const KnowMoreBtn = ({ to, text = "Know More", variant = "primary", className = "" }) => {
  return (
    <Link to={to} className={`btn btn-${variant} ${className}`.trim()}>
      {text}
      <ArrowRight className="btn-icon" size={18} />
    </Link>
  );
};

export default KnowMoreBtn;
