import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Shield, Target, Clock, Zap, CheckCircle2, ChevronRight, Activity, Smile, Sun } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import './AdvancedTechnology.css';

const technologies = [
  {
    id: 'cbct',
    name: '3D CBCT Scan',
    tagline: 'Precision Imaging for Complex Procedures',
    description: 'High-resolution three-dimensional imaging that allows our specialists to view your teeth, jawbone, nerve pathways, and soft tissues in incredible detail.',
    image: '/assets/tech_cbct.png',
    benefits: ['Sub-millimeter accuracy for implant placement', 'Painless and non-invasive', 'Comprehensive view of oral structures'],
    icon: <Target size={32} />
  },
  {
    id: 'scanner',
    name: 'Digital Intraoral Scanner',
    tagline: 'No More Goop. Just Digital Precision.',
    description: 'Fast, comfortable, and highly accurate digital impressions without the need for traditional, uncomfortable impression materials.',
    image: '/assets/tech_scanner.png',
    benefits: ['Gag-free comfortable experience', 'Immediate 3D visualization', 'Perfectly fitting crowns and aligners'],
    icon: <Activity size={32} />
  },
  {
    id: 'smile-design',
    name: 'Digital Smile Design',
    tagline: 'Preview Your New Smile Before Treatment',
    description: 'Advanced software that allows us to design and preview your ideal smile digitally, ensuring predictable and stunning cosmetic results.',
    image: '/assets/smile_designing.png',
    benefits: ['See the final result before starting', 'Collaborative design process', 'Tailored to your facial features'],
    icon: <Smile size={32} />
  },
  {
    id: 'laser',
    name: 'Laser Dentistry',
    tagline: 'Gentle, Minimally Invasive Care',
    description: 'State-of-the-art dental lasers for soft tissue procedures, offering faster healing, reduced discomfort, and greater precision than traditional methods.',
    image: '/assets/tech_laser.png',
    benefits: ['Minimal bleeding and swelling', 'Faster recovery times', 'Often requires less anesthesia'],
    icon: <Zap size={32} />
  },
  {
    id: 'xray',
    name: 'Digital X-Ray',
    tagline: 'Safer, Faster, Better Diagnostics',
    description: 'High-quality digital imaging with significantly reduced radiation exposure compared to traditional film X-rays.',
    image: '/assets/tech_xray.png',
    benefits: ['Up to 90% less radiation', 'Instant high-resolution images', 'Environmentally friendly (no chemicals)'],
    icon: <Shield size={32} />
  },
  {
    id: 'camera',
    name: 'Intraoral Camera',
    tagline: 'See What We See',
    description: 'Magnified live images displayed on a screen that help you clearly understand your oral health condition and treatment needs.',
    image: '/assets/tech_camera.png',
    benefits: ['Transparent diagnosis', 'Enhanced patient understanding', 'Highly magnified clear images'],
    icon: <Sun size={32} />
  },
  {
    id: 'sterilization',
    name: 'Advanced Sterilization',
    tagline: 'Your Safety is Our Priority',
    description: 'International Class-B sterilization protocols utilizing high-end autoclaves and strict hygiene measures to ensure 100% infection control.',
    image: '/assets/tech_sterilization.png',
    benefits: ['Hospital-grade infection control', 'Multi-step sterilization process', 'Complete peace of mind'],
    icon: <Shield size={32} />
  },
  {
    id: 'chairs',
    name: 'Modern Dental Chairs',
    tagline: 'Redefining Patient Comfort',
    description: 'Ergonomically designed treatment units focused on maximizing your physical comfort during long or complex procedures.',
    image: '/assets/treatment_area.jpeg',
    benefits: ['Plush ergonomic support', 'Reduced treatment fatigue', 'Integrated multimedia entertainment'],
    icon: <Clock size={32} />
  }
];

const AdvancedTechnology = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Advanced Dental Technology | Radiance Dentistry</title>
        <meta name="description" content="Explore the state-of-the-art dental technology at Radiance Dentistry. From 3D CBCT scans to Laser Dentistry, experience modern, painless, and precise care." />
        <link rel="canonical" href="https://radiancedentistry.com/advanced-technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-hero-overlay"></div>
        <div className="container tech-hero-content">
          <div className="breadcrumbs">
            <a href="/">Home</a> <ChevronRight size={14} /> <span>Advanced Technology</span>
          </div>
          <h1>Innovation Meets Expertise</h1>
          <p>Discover how our world-class dental technology ensures safer procedures, precise diagnosis, and a comfortable, pain-free experience.</p>
        </div>
      </section>

      {/* Technology List Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="tech-page-grid">
            {technologies.map((tech, index) => (
              <div 
                key={tech.id} 
                id={tech.id} 
                className={`tech-detail-card ${index % 2 !== 0 ? 'row-reverse' : ''}`}
              >
                <FadeInWhenVisible className="tech-detail-image-col">
                  <div className="tech-detail-image-wrapper">
                    <img src={tech.image} alt={tech.name} loading="lazy" />
                  </div>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible className="tech-detail-content-col" delay={0.2}>
                  <div className="tech-detail-icon">{tech.icon}</div>
                  <h2>{tech.name}</h2>
                  <h4 className="tech-tagline text-gold">{tech.tagline}</h4>
                  <p className="tech-desc">{tech.description}</p>
                  
                  <div className="tech-benefits">
                    <h5>Key Benefits</h5>
                    <ul>
                      {tech.benefits.map((benefit, i) => (
                        <li key={i}><CheckCircle2 size={18} className="text-teal" /> {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-navy text-white text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h2>Experience Modern Dentistry</h2>
            <p className="max-w-700 mx-auto mb-40">Book an appointment today and discover the difference that advanced technology and expert care can make for your smile.</p>
            <div className="flex-center gap-20">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
              <a href="https://wa.me/1234567890" className="btn btn-outline-white">WhatsApp Us</a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
};

export default AdvancedTechnology;
