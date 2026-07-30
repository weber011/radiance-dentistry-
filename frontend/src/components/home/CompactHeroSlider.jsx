import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Award, 
  Smile, 
  Globe, 
  ShieldCheck, 
  Sparkles,
  Activity,
  Heart,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import './CompactHeroSlider.css';

// Custom CountUp Component for statistics
const CounterItem = ({ end, suffix = "", title, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let start = 0;
    const isNumber = typeof end === 'number';
    if (!isNumber) {
      setCount(end);
      return;
    }
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, hasAnimated]);

  return (
    <motion.div 
      ref={elementRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className="stat-card-white"
    >
      <h3 className="stat-counter-val">
        {typeof end === 'number' ? count : end}{suffix}
      </h3>
      <p className="stat-counter-label">{title}</p>
    </motion.div>
  );
};

const CompactHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      headline: "Confident Smiles Begin Here",
      subheading: "Advanced Digital Dentistry with Personalized Care",
      buttonText: "Book Consultation",
      buttonLink: "/contact",
      mediaType: "image",
      mediaSrc: "/assets/reception.jpeg?v=2",
      alt: "Radiaance Dentistry clinic reception and welcoming environment"
    },
    {
      id: 2,
      headline: "Premium Dental Implants",
      subheading: "Natural-looking, long-lasting tooth replacement.",
      buttonText: "Know More",
      buttonLink: "/services",
      mediaType: "image",
      mediaSrc: "/assets/dental_implants.png",
      alt: "Premium Dental Implants treatment"
    },
    {
      id: 3,
      headline: "Smile Makeover Experts",
      subheading: "Transform your smile with veneers and cosmetic dentistry.",
      buttonText: "View Treatments",
      buttonLink: "/services",
      mediaType: "image",
      mediaSrc: "/assets/smile_designing.png",
      alt: "Cosmetic dentistry before and after smile makeover"
    },
    {
      id: 4,
      headline: "Pain-Free Root Canal Treatment",
      subheading: "Modern techniques for comfortable dental care.",
      buttonText: "Book Now",
      buttonLink: "/contact",
      mediaType: "image",
      mediaSrc: "/assets/root_canal.png",
      alt: "Pain-Free Root Canal Treatment"
    },
    {
      id: 5,
      headline: "International Standard Dental Care",
      subheading: "Trusted by patients from India and abroad.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      mediaType: "image",
      mediaSrc: "/assets/equipment1.jpeg",
      alt: "Luxury clinic interior with advanced equipment"
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay functionality (every 4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="compact-hero-wrapper">
      
      {/* 1. COMPACT PREMIUM HERO BANNER SLIDER */}
      <section 
        className="compact-slider-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container compact-slider-container">
          <div className="slider-card-frame-v2">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="slide-item"
              >
                {/* Media Background with Ken Burns Soft Zoom */}
                <div className="slide-media-wrapper">
                  {slides[currentSlide].mediaType === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="slide-media ken-burns"
                    >
                      <source src={slides[currentSlide].mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={slides[currentSlide].mediaSrc} 
                      alt={slides[currentSlide].alt} 
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                      className="slide-media ken-burns" 
                    />
                  )}
                </div>

                {/* 40-50% Dark Blue Gradient Overlay */}
                <div className="slide-gradient-overlay"></div>

                {/* Left-Aligned Premium Content */}
                <div className="slide-content-box">
                  <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="slide-badge"
                  >
                    ✨ Surat's Premier Dental Excellence
                  </motion.span>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="slide-headline"
                  >
                    {slides[currentSlide].headline}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="slide-subheading"
                  >
                    {slides[currentSlide].subheading}
                  </motion.p>

                  {/* FEATURED SPECIALTIES COMPONENT */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="hero-featured-specialties"
                  >
                    <p className="specialties-section-title">OUR SPECIALIZED CARE</p>
                    <div className="specialties-cards-container-v2">
                      <Link to="/treatments/clear-aligners" className="specialty-card">
                        <div className="specialty-card-icon">
                          <Smile size={20} />
                        </div>
                        <div>
                          <h4 className="specialty-card-title">Clear Aligners</h4>
                          <span className="specialty-card-link">Know More &rarr;</span>
                        </div>
                      </Link>

                      <Link to="/treatments/pediatric-dentistry" className="specialty-card">
                        <div className="specialty-card-icon">
                          <Heart size={20} />
                        </div>
                        <div>
                          <h4 className="specialty-card-title">Pediatric Dentistry</h4>
                          <span className="specialty-card-link">Know More &rarr;</span>
                        </div>
                      </Link>

                      <Link to="/treatments/full-mouth-rehabilitation" className="specialty-card">
                        <div className="specialty-card-icon">
                          <Sparkles size={20} />
                        </div>
                        <div>
                          <h4 className="specialty-card-title">Full Mouth Rehabilitation</h4>
                          <span className="specialty-card-link">Know More &rarr;</span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="slide-btn-wrapper"
                  >
                    <Link to={slides[currentSlide].buttonLink} className="slide-btn-gold">
                      <span>{slides[currentSlide].buttonText}</span>
                      <Calendar size={18} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              className="slider-arrow arrow-prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="slider-arrow arrow-next" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Animated Pagination Dots */}
            <div className="slider-pagination">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`pagination-dot ${currentSlide === idx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {currentSlide === idx && (
                    <motion.span 
                      layoutId="activeDot" 
                      className="dot-progress-indicator" 
                    />
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. IMMEDIATELY BELOW THE SLIDER: PREMIUM STATISTICS SECTION */}
      <section className="compact-stats-section">
        <div className="container">
          <div className="stats-cards-grid">
            <CounterItem end={5000} suffix="+" title="Happy Smiles" delay={0.1} />
            <CounterItem end={20} suffix="+" title="Years Experience" delay={0.2} />
            <CounterItem end={12000} suffix="+" title="Treatments Completed" delay={0.3} />
            <CounterItem end={98} suffix="%" title="Patient Satisfaction" delay={0.4} />
          </div>
        </div>
      </section>

      {/* 3. TRUST BADGE SECTION (Elegant Capsule-Shaped Cards) */}
      <section className="compact-trust-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="trust-capsules-grid"
          >
            <div className="trust-capsule-white">
              <Star className="trust-icon-gold fill-gold" size={20} />
              <span><strong>4.9</strong> Google Rating</span>
            </div>

            <div className="trust-capsule-white">
              <Activity className="trust-icon-blue" size={20} />
              <span>Advanced Digital Dentistry</span>
            </div>

            <div className="trust-capsule-white">
              <Award className="trust-icon-gold" size={20} />
              <span>Certified Implant & Cosmetic Dentist</span>
            </div>

            <div className="trust-capsule-white">
              <ShieldCheck className="trust-icon-blue" size={20} />
              <span>Sterilized & Safe Environment</span>
            </div>

            <div className="trust-capsule-white">
              <Globe className="trust-icon-gold" size={20} />
              <span>International Patient Care</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CompactHeroSlider;
