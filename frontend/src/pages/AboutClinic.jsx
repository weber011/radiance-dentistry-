import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { 
  ChevronRight, Heart, Eye, Target, Shield, Star, Users, CheckCircle2, 
  MapPin, Phone, Activity, Sparkles, Stethoscope, ChevronLeft, X 
} from 'lucide-react';
import './AboutClinic.css';

const FadeInWhenVisible = ({ children, className = "", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AboutClinic = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const galleryImages = [
    '/assets/reception.jpeg',
    '/assets/office.jpeg',
    '/assets/treatment_area.jpeg'
  ];

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Radiance Dentistry",
    "image": "https://www.radiancedentistry.com/assets/logo.png",
    "@id": "",
    "url": "https://www.radiancedentistry.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Radiance Blvd",
      "addressLocality": "CityName",
      "postalCode": "12345",
      "addressCountry": "US"
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.radiancedentistry.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "About Clinic"
    }]
  };

  return (
    <div className="page-about page-transition">
      <Helmet>
        <title>About Radiance Dentistry | Premium Dental Clinic</title>
        <meta name="description" content="Discover Radiance Dentistry, a place where modern dentistry meets compassionate care in a luxurious environment." />
        <link rel="canonical" href="https://www.radiancedentistry.com/about-clinic" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-bg" style={{ backgroundImage: 'url(/assets/reception.jpeg)' }}></div>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="breadcrumbs">
              <Link to="/">Home</Link> <ChevronRight size={14} /> <span>About Clinic</span>
            </div>
            <h1>About Radiance Dentistry</h1>
            <p>A place where modern dentistry meets compassionate care.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="section bg-light">
        <div className="container split-layout">
          <FadeInWhenVisible className="split-image-container">
            <img src="/assets/office.jpeg" alt="Radiance Dentistry Office" className="luxury-radius shadow-lg" />
            <div className="floating-badge glassmorphism">
              <span className="badge-year">15+</span>
              <span className="badge-text">Years of<br/>Excellence</span>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="split-content" delay={0.2}>
            <h4 className="section-subtitle">OUR STORY</h4>
            <h2>Committed to Your Best Smile</h2>
            <p className="intro-text">Radiance Dentistry was founded with a singular vision: to redefine the dental experience.</p>
            <p className="body-text">We focus on personalized care, ensuring every patient is heard and understood. By integrating advanced technology with ethical dentistry, we provide treatments that are not only effective but designed for long-term oral health. Our beautiful clinic environment is carefully crafted to ease anxiety, offering a calming sanctuary for your dental journey.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 2 & 3: Mission & Vision */}
      <section className="section mission-vision-section">
        <div className="container mv-grid">
          <FadeInWhenVisible>
            <div className="mv-card glassmorphism">
              <div className="mv-icon"><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To deliver world-class dental care by combining clinical precision, advanced technology, and genuine compassion, ensuring every patient leaves with a healthier, more confident smile.</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="mv-card glassmorphism">
              <div className="mv-icon"><Eye size={32} /></div>
              <h3>Our Vision</h3>
              <p>To be the leading center for dental excellence, globally recognized for ethical practices, transformative treatments, and establishing new standards in patient-first oral healthcare.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 4: Our Philosophy */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">OUR PHILOSOPHY</h4>
            <h2>The Radiance Difference</h2>
          </div>
          <div className="philosophy-grid">
            <FadeInWhenVisible className="philosophy-card glassmorphism hover-lift">
              <Heart size={28} className="text-gold mb-20" />
              <h4>Patient First</h4>
              <p>Your comfort, needs, and goals drive every decision we make in your treatment plan.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="philosophy-card glassmorphism hover-lift" delay={0.1}>
              <Activity size={28} className="text-gold mb-20" />
              <h4>Advanced Technology</h4>
              <p>We invest in the latest dental innovations to ensure painless and precise procedures.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="philosophy-card glassmorphism hover-lift" delay={0.2}>
              <Sparkles size={28} className="text-gold mb-20" />
              <h4>Comfort & Hygiene</h4>
              <p>Maintaining the highest international sterilization standards in a soothing environment.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="philosophy-card glassmorphism hover-lift" delay={0.3}>
              <Shield size={28} className="text-gold mb-20" />
              <h4>Ethical Dentistry</h4>
              <p>Transparent pricing and honest recommendations. We only suggest treatments you truly need.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 5: Clinic Facilities */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">GALLERY</h4>
            <h2>Clinic Facilities</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <div className="gallery-item" onClick={() => openLightbox(img)}>
                  <img src={img} alt="Clinic Facility" />
                  <div className="gallery-overlay"><Sparkles size={24} /></div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Sterilization & Safety */}
      <section className="section bg-light">
        <div className="container split-layout reverse">
          <FadeInWhenVisible className="split-content">
            <h4 className="section-subtitle">SAFETY FIRST</h4>
            <h2>Sterilization & Safety</h2>
            <p className="body-text mb-20">Your safety is our top priority. We follow strict international protocols to ensure a 100% sterile and hygienic environment for every procedure.</p>
            <ul className="premium-checklist">
              <li><CheckCircle2 size={20} className="text-gold" /> Autoclave sterilization for all instruments</li>
              <li><CheckCircle2 size={20} className="text-gold" /> Single-use disposables where applicable</li>
              <li><CheckCircle2 size={20} className="text-gold" /> Continuous air purification systems</li>
              <li><CheckCircle2 size={20} className="text-gold" /> Deep surface disinfection between patients</li>
            </ul>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="split-image-container" delay={0.2}>
            <img src="/assets/treatment_area.jpeg" alt="Sterilization" className="luxury-radius shadow-lg" />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 7: Advanced Equipment */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">TECHNOLOGY</h4>
            <h2>Advanced Equipment</h2>
          </div>
          <div className="equipment-grid">
            <FadeInWhenVisible className="equipment-card">
              <div className="equip-img-wrapper">
                <img src="/assets/equipment.jpeg" alt="Advanced Imaging" />
              </div>
              <div className="equip-content glassmorphism">
                <h4>3D Dental Imaging</h4>
                <p>Provides highly detailed 3D scans of your jaw and teeth for precise implant placement and complex diagnostics.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="equipment-card" delay={0.2}>
              <div className="equip-img-wrapper">
                <img src="/assets/equipment1.jpeg" alt="Laser Dentistry" />
              </div>
              <div className="equip-content glassmorphism">
                <h4>Modern Dental Chairs</h4>
                <p>Ergonomically designed for maximum patient comfort, integrated with advanced delivery systems.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 8: Why Choose Us (Timeline) */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">DIFFERENCE</h4>
            <h2>Why Choose Radiance Dentistry</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <FadeInWhenVisible className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-content glassmorphism">
                <h4>Personalized Care</h4>
                <p>Treatments tailored specifically to your unique dental profile.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="timeline-item right" delay={0.1}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glassmorphism">
                <h4>Modern Technology</h4>
                <p>State-of-the-art equipment for painless procedures.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="timeline-item left" delay={0.2}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glassmorphism">
                <h4>Transparent Consultation</h4>
                <p>Clear explanations of your condition and associated costs upfront.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="timeline-item right" delay={0.3}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glassmorphism">
                <h4>Experienced Team</h4>
                <p>Highly qualified specialists dedicated to clinical excellence.</p>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="timeline-item left" delay={0.4}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glassmorphism">
                <h4>Comfortable Environment</h4>
                <p>A relaxing sanctuary designed to eliminate dental anxiety.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 9: Experience Our Clinic (Parallax) */}
      <section className="experience-parallax">
        <div className="parallax-bg" style={{ backgroundImage: 'url(/assets/office.jpeg)' }}></div>
        <div className="parallax-overlay"></div>
        <div className="container parallax-content text-center">
          <FadeInWhenVisible>
            <h2>Experience True Dental Luxury</h2>
            <p>Your journey to a perfect smile begins the moment you step through our doors.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="section cta-section">
        <div className="container">
          <FadeInWhenVisible className="cta-card glassmorphism-dark text-center">
            <h2>Ready to Experience Better Dental Care?</h2>
            <p className="mb-40">Schedule your consultation today and take the first step toward a healthier, more radiant smile.</p>
            <div className="cta-buttons">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
              <a href="tel:+1234567890" className="btn btn-outline-white"><Phone size={18} /> Call Now</a>
              <a href="https://wa.me/1234567890" className="btn btn-outline-white text-green"><CheckCircle2 size={18} /> WhatsApp</a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><X size={32} /></button>
          <img src={currentImage} alt="Expanded Facility" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default AboutClinic;
