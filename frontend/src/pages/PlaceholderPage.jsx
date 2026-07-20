import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PlaceholderPage.css';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="placeholder-page">
      <div className="placeholder-content">
        <h1>{title}</h1>
        <p>This is a dedicated placeholder page for the "{title}" section. Content will be added here in the future.</p>
        <Link to="/" className="btn-back">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;
