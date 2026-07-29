import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Award, 
  Smile, 
  Globe, 
  Heart, 
  Zap, 
  CheckCircle2, 
  Play, 
  Sparkles, 
  ShieldCheck,
  ChevronDown,
  Activity,
  UserCheck
} from 'lucide-react';
import './LuxuryHeroSection.css';

// Custom CountUp Component for statistics
const CounterItem = ({ end, suffix = "", title, icon: Icon, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="luxury-stat-card glassmorphism-card"
    >
      <div className="stat-icon-wrapper">
        <Icon size={26} className="icon-gold" />
      </div>
      <div className="stat-content">
        <h3 className="stat-value">
          {typeof end === 'number' ? count : end}{suffix}
        </h3>
        <p className="stat-label">{title}</p>
      </div>
    </motion.div>
  );
};

const LuxuryHeroSection = () => {
  return (
    <section className="luxury-hero-section">
      {/* 1. Cinematic Autoplay Background Video */}
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          poster="/assets/hero_image_fallback.jpg"
        >
          <source src="/assets/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay-luxury"></div>
        
        {/* Animated Floating Particles */}
        <div className="floating-particles-container">
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
          <span className="particle particle-5"></span>
          <span className="particle particle-6"></span>
        </div>
      </div>

      {/* 2. Main Content Container (Viewport Height 100vh Layout) */}
      <div className="container hero-main-container">
        <div className="hero-grid-layout">
          
          {/* Left Column: Headline, Subtitle, CTAs & Trust Badges */}
          <div className="hero-left-col">
            
            {/* Small Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="premium-hero-badge glass-pill"
            >
              <Sparkles size={16} className="icon-gold animate-spin-slow" />
              <span>Surat's Trusted Digital Dental Clinic</span>
            </motion.div>

            {/* Main Headline with Line-by-Line Reveal */}
            <h1 className="hero-main-headline">
              <motion.span 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="headline-line"
              >
                Experience <span className="text-gold-gradient">Luxury Dentistry</span>,
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="headline-line"
              >
                Designed Around <span className="text-gold-gradient">Your Smile.</span>
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-subheading"
            >
              Advanced Digital Dentistry <span className="gold-bullet">•</span> Pain-Free Treatments <span className="gold-bullet">•</span> International Patient Care <span className="gold-bullet">•</span> Personalized Smile Makeovers
            </motion.p>

            {/* Two Premium CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-cta-group"
            >
              <Link to="/contact" className="btn-gold-premium ripple-effect">
                <span>Book Free Consultation</span>
                <Sparkles size={18} />
              </Link>
              <Link to="/tour-the-clinic" className="btn-glass-outline ripple-effect">
                <Play size={18} className="icon-gold fill-gold" />
                <span>Watch Clinic Tour</span>
              </Link>
            </motion.div>

            {/* Four Animated Trust Badges in Glass Cards */}
            <div className="hero-trust-badges-grid">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="trust-badge-card glass-mini"
              >
                <div className="badge-icon-box"><Star className="icon-gold fill-gold" size={20} /></div>
                <div className="badge-text">
                  <strong>4.9 / 5</strong>
                  <span>Google Rating</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.15 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="trust-badge-card glass-mini"
              >
                <div className="badge-icon-box"><Award className="icon-gold" size={20} /></div>
                <div className="badge-text">
                  <strong>20+ Years</strong>
                  <span>Experience</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="trust-badge-card glass-mini"
              >
                <div className="badge-icon-box"><Smile className="icon-gold" size={20} /></div>
                <div className="badge-text">
                  <strong>5000+</strong>
                  <span>Happy Smiles</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.45 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="trust-badge-card glass-mini"
              >
                <div className="badge-icon-box"><Globe className="icon-gold" size={20} /></div>
                <div className="badge-text">
                  <strong>Global Care</strong>
                  <span>International Patients</span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column: Floating Doctor Card & 3D Dental Elements */}
          <div className="hero-right-col">
            <div className="doctor-showcase-wrapper">
              
              {/* 3D Floating Dental Elements Behind Doctor Card */}
              <div className="floating-3d-elements">
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="element-3d element-tooth glass-card-element"
                >
                  <Activity size={24} className="icon-gold" />
                  <span>Digital 3D Scan</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                  className="element-3d element-aligner glass-card-element"
                >
                  <Smile size={24} className="icon-teal" />
                  <span>Invisible Aligners</span>
                </motion.div>

                <motion.div 
                  animate={{ x: [0, -12, 0], y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
                  className="element-3d element-laser glass-card-element"
                >
                  <Zap size={24} className="icon-gold" />
                  <span>Painless Laser</span>
                </motion.div>
              </div>

              {/* Elegant Floating Doctor Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="doctor-floating-card"
              >
                <div className="doctor-card-glow"></div>
                <div className="doctor-img-box">
                  <img src="/assets/doctor pic.jpeg?v=4" alt="Dr. Ruchi Jain - Radiaance Dentistry" className="doctor-img" />
                  <div className="doctor-img-gradient"></div>
                </div>

                {/* Animated Gold Border Frame */}
                <div className="gold-border-frame"></div>

                {/* Floating Certificate / Authority Badges */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="doc-badge badge-top-right glass-pill"
                >
                  <Award size={16} className="icon-gold" />
                  <span>Certified Implantologist</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  className="doc-badge badge-bottom-left glass-pill"
                >
                  <UserCheck size={16} className="icon-gold" />
                  <span>20+ Years Mastery</span>
                </motion.div>

                <div className="doctor-card-info glass-panel">
                  <h3 className="doc-name">Dr. Ruchi Jain</h3>
                  <p className="doc-title">Chief Dental Surgeon & Smile Architect</p>
                  <div className="doc-creds">
                    <span className="cred-tag">BDS, FAGE</span>
                    <span className="cred-tag">Ex-Resident AIIMS</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* 3. Bottom Statistics Cards (Smooth Count-Up) */}
        <div className="hero-stats-section">
          <div className="stats-grid-layout">
            <CounterItem end={5000} suffix="+" title="Happy Smiles Created" icon={Smile} delay={0.1} />
            <CounterItem end={20} suffix="+" title="Years Clinical Experience" icon={Award} delay={0.2} />
            <CounterItem end={98} suffix="%" title="Patient Satisfaction Rate" icon={Heart} delay={0.3} />
            <CounterItem end="Same Day" suffix="" title="Digital Smile Dentistry" icon={Zap} delay={0.4} />
          </div>
        </div>

        {/* 4. Horizontal Premium Feature Strip (Capsule Cards) */}
        <div className="hero-feature-strip">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="feature-capsules-flex"
          >
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>Digital Smile Design</span>
            </div>
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>Painless Dentistry</span>
            </div>
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>Certified Implantologist</span>
            </div>
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>CBCT & Intraoral Scanner</span>
            </div>
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>Strict Sterilization Protocol</span>
            </div>
            <div className="feature-capsule glass-pill-hover">
              <CheckCircle2 size={16} className="icon-gold" />
              <span>International Patient Support</span>
            </div>
          </motion.div>
        </div>

        {/* 5. Animated Scroll Indicator at bottom */}
        <div className="scroll-indicator-wrapper">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="scroll-pill"
          >
            <span className="scroll-text">Scroll to Explore</span>
            <ChevronDown size={16} className="icon-gold" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LuxuryHeroSection;
