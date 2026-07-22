import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import TestimonialCard from '../components/ui/TestimonialCard';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { reviewsData } from '../data/reviewsData';
import './Reviews.css';

const Reviews = () => {
  const [filter, setFilter] = useState('All');

  // Generate unique treatment categories for filter
  const categories = ['All', ...new Set(reviewsData.map(review => review.treatment).filter(Boolean))];

  const filteredReviews = filter === 'All' 
    ? reviewsData 
    : reviewsData.filter(review => review.treatment === filter);

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Radiance Dentistry",
    "image": "https://radiaancedentistry.com/assets/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": `${reviewsData.length}`
    },
    "review": reviewsData.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text
    }))
  };

  return (
    <div className="reviews-page">
      <Helmet>
        <title>Patient Reviews | Radiance Dentistry</title>
        <meta name="description" content="Read real reviews from our patients. Discover why Radiance Dentistry is highly recommended for compassionate, expert dental care." />
        <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="reviews-hero bg-dark">
        <div className="container text-center">
          <div className="badge-gold mb-20 mx-auto">PATIENT EXPERIENCES</div>
          <h1 className="text-white">Smiles That Speak for Themselves</h1>
          <p className="hero-subtitle max-w-700 mx-auto text-gray-300">
            We are incredibly proud to have earned the trust of so many patients. Read their stories and discover the Radiance difference.
          </p>
          
          <div className="overall-rating glassmorphism-dark mt-40 mx-auto">
            <div className="rating-number text-gold">5.0</div>
            <div className="stars flex-center mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="icon-gold" fill="currentColor" />
              ))}
            </div>
            <p className="text-white font-medium m-0">Based on {reviewsData.length} patient reviews</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-light">
        <div className="container">
          
          {/* Filters */}
          <div className="reviews-filter-container mb-50">
            {categories.map((category) => (
              <button 
                key={category} 
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="reviews-grid">
            {filteredReviews.map((review, idx) => (
              <div className="review-grid-item" key={review.id || idx}>
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="reviews-cta text-center mt-80">
            <h3 className="mb-20 text-navy">Ready to transform your smile?</h3>
            <KnowMoreBtn to="/contact" text="Book Your Appointment Today" variant="gold" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Reviews;
