import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { 
  ChevronRight, Sofa, Users, Star, Monitor, ShieldCheck, Heart, 
  Sparkles, CheckCircle2, Phone, X, PlayCircle, ArrowLeft
} from 'lucide-react';
import './TourClinic.css';

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

const TourClinic = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const tourImages = [
    '/assets/reception.jpeg',
    '/assets/office.jpeg',
    '/assets/treatment_area.jpeg',
    '/assets/equipment.jpeg'
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
    "@type": "LocalBusiness",
    "name": "Radiaance Dentistry",
    "image": "https://www.radiaancedentistry.com/assets/office.jpeg",
    "@id": "",
    "url": "https://www.radiaancedentistry.com",
    "telephone": "8696781255",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 518, 5th Floor, Western Business Park, Vesu",
      "addressLocality": "Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="page-tour page-transition">
      <Helmet>
        <title>Tour Our Clinic | Radiaance Dentistry</title>
        <meta name="description" content="Take a virtual tour of Radiaance Dentistry. Explore our modern reception, advanced treatment rooms, and state-of-the-art dental technology designed for your comfort." />
        <link rel="canonical" href="https://www.radiaancedentistry.com/tour-the-clinic" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="tour-hero">
        <div className="tour-hero-bg" style={{ backgroundImage: 'url(/assets/office.jpeg)' }}></div>
        <div className="tour-hero-overlay"></div>
        <div className="container tour-hero-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="td-top-actions">
              <Link to="/" className="td-back-btn">
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
            <div className="breadcrumbs">
              <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Tour The Clinic</span>
            </div>
            <h1>Tour Radiaance Dentistry</h1>
            <p>Step inside our modern dental clinic and experience a space designed for comfort, safety, and exceptional patient care.</p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Welcome to Our Clinic */}
      <section className="section bg-light">
        <div className="container text-center max-w-800">
          <FadeInWhenVisible>
            <h4 className="section-subtitle">WELCOME</h4>
            <h2>A Space Designed For You</h2>
            <p className="body-text mt-20">At Radiaance Dentistry, we believe that exceptional dental care begins the moment you walk through our doors. We have combined modern infrastructure, cutting-edge technology, and a calming atmosphere to ensure every patient feels relaxed, safe, and comfortable throughout their entire visit.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 2: Clinic Highlights */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">FACILITIES</h4>
            <h2>Clinic Highlights</h2>
          </div>
          <div className="highlights-grid">
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift">
              <div className="icon-wrapper outline mb-20"><Sofa size={28}/></div>
              <h4>Elegant Reception Area</h4>
              <p>A welcoming space designed to make you feel at home.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift" delay={0.1}>
              <div className="icon-wrapper outline mb-20"><Heart size={28}/></div>
              <h4>Comfortable Waiting Lounge</h4>
              <p>Relax with premium amenities before your consultation.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift" delay={0.2}>
              <div className="icon-wrapper outline mb-20"><Sparkles size={28}/></div>
              <h4>Advanced Treatment Rooms</h4>
              <p>State-of-the-art operatories for precise procedures.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift" delay={0.3}>
              <div className="icon-wrapper outline mb-20"><Monitor size={28}/></div>
              <h4>Digital Dental Equipment</h4>
              <p>Equipped with the latest diagnostic and imaging tech.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift" delay={0.4}>
              <div className="icon-wrapper outline mb-20"><ShieldCheck size={28}/></div>
              <h4>Strict Sterilization Protocols</h4>
              <p>International standards of hygiene and infection control.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="highlight-card glassmorphism hover-lift" delay={0.5}>
              <div className="icon-wrapper outline mb-20"><Users size={28}/></div>
              <h4>Patient-Friendly Environment</h4>
              <p>A serene, stress-free atmosphere to reduce dental anxiety.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Clinic Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">GALLERY</h4>
            <h2>Interactive Clinic Tour</h2>
          </div>
          <div className="tour-gallery-masonry">
            {tourImages.map((img, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1} className={`tour-gallery-item ${idx === 0 ? 'span-2' : ''}`}>
                <div className="tour-img-wrapper" onClick={() => openLightbox(img)}>
                  <img src={img} alt={`Clinic Interior ${idx + 1}`} />
                  <div className="tour-gallery-overlay"><Sparkles size={24} /></div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Inside Our Treatment Rooms */}
      <section className="section">
        <div className="container split-layout reverse">
          <FadeInWhenVisible className="split-content">
            <h4 className="section-subtitle">TREATMENT AREA</h4>
            <h2>Inside Our Treatment Rooms</h2>
            <p className="body-text mb-20">Our treatment operatories are the heart of our clinic, featuring modern dental chairs designed ergonomically for maximum patient comfort during long procedures.</p>
            <p className="body-text mb-20">We have integrated advanced digital technology directly into the treatment experience, ensuring highly accurate diagnostics, efficient procedures, and a completely painless experience.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="split-image-container-safe" delay={0.2}>
            <img src="/assets/treatment_area.jpeg" alt="Treatment Room" />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Section 5: Hygiene & Sterilization */}
      <section className="section bg-navy text-white">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-gold">SAFETY</h4>
            <h2 className="text-white">Hygiene &amp; Sterilization</h2>
            <p className="text-light max-w-700 mx-auto mb-40">We strictly adhere to international infection control protocols, guaranteeing a completely clean, safe, and sterile environment for your peace of mind.</p>
          </FadeInWhenVisible>
          <div className="hygiene-grid">
            <FadeInWhenVisible className="hygiene-card glassmorphism-dark hover-lift">
              <ShieldCheck size={32} className="text-gold mb-15" />
              <h4>Sterilized Instruments</h4>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="hygiene-card glassmorphism-dark hover-lift" delay={0.1}>
              <Sparkles size={32} className="text-gold mb-15" />
              <h4>Clean Treatment Rooms</h4>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="hygiene-card glassmorphism-dark hover-lift" delay={0.2}>
              <Heart size={32} className="text-gold mb-15" />
              <h4>Patient Safety Standards</h4>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="hygiene-card glassmorphism-dark hover-lift" delay={0.3}>
              <CheckCircle2 size={32} className="text-gold mb-15" />
              <h4>Modern Infection Control</h4>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 6: Patient Comfort */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">EXPERIENCE</h4>
            <h2>Designed for Patient Comfort</h2>
          </div>
          <div className="comfort-grid">
            <FadeInWhenVisible className="comfort-card bg-white hover-lift">
              <div className="comfort-icon bg-gold-light text-gold"><Sofa size={24}/></div>
              <div>
                <h4>Relaxing Environment</h4>
                <p>Aesthetic design and calming ambiance to ease anxiety.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="comfort-card bg-white hover-lift" delay={0.1}>
              <div className="comfort-icon bg-gold-light text-gold"><Users size={24}/></div>
              <div>
                <h4>Friendly Team</h4>
                <p>Warm and compassionate staff dedicated to your care.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="comfort-card bg-white hover-lift" delay={0.2}>
              <div className="comfort-icon bg-gold-light text-gold"><Star size={24}/></div>
              <div>
                <h4>Personalized Attention</h4>
                <p>We take the time to listen and understand your needs.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="comfort-card bg-white hover-lift" delay={0.3}>
              <div className="comfort-icon bg-gold-light text-gold"><Heart size={24}/></div>
              <div>
                <h4>Comfortable Consultation</h4>
                <p>Transparent communication in a private setting.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Section 7: Virtual Experience */}
      <section className="section">
        <div className="container">
          <FadeInWhenVisible className="virtual-tour-placeholder glassmorphism-subtle">
            <div className="virtual-content">
              <PlayCircle size={64} className="text-gold mb-20" />
              <h2>360° Virtual Clinic Tour Coming Soon</h2>
              <p>Experience our entire clinic interactively from the comfort of your home.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section pt-0">
        <div className="container">
          <FadeInWhenVisible className="cta-card glassmorphism-dark text-center">
            <h2>Experience Radiaance Dentistry in Person</h2>
            <p className="mb-40">Ready to transform your smile in a comfortable, premium environment?</p>
            <div className="cta-buttons">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
              <a href="tel:8696781255" className="btn btn-outline-white"><Phone size={18} /> Call Now</a>
              <a href="https://wa.me/918696781255" className="btn btn-outline-white text-green"><CheckCircle2 size={18} /> WhatsApp</a>
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

export default TourClinic;
