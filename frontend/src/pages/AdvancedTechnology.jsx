import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MessageCircle, Calendar, Shield, Activity, Target, Clock, Star, Play, CheckCircle2, Heart } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import './AdvancedTechnology.css';

const technologies = [
  {
    id: "digital-xray",
    name: "Digital X-Ray",
    image: "tech_xray.png",
    shortDesc: "Provides highly detailed images while exposing patients to significantly less radiation compared to traditional X-rays.",
    benefits: ["Faster diagnosis", "Better treatment planning", "Greater safety"],
    explanation: "Our digital X-ray system captures instantaneous, high-resolution images of your teeth and jaw structure. By eliminating chemical processing, it's environmentally friendly and reduces radiation exposure by up to 90%.",
    howItWorks: "A small digital sensor is placed in the mouth to capture the image, which is immediately transmitted to a computer screen where it can be magnified and enhanced for precise analysis.",
    patientComfort: "Faster image capture means less time with uncomfortable bite wings in your mouth.",
    treatments: ["Root Canals", "Extractions", "Routine Checkups"]
  },
  {
    id: "cbct-scanner",
    name: "CBCT Scanner",
    image: "tech_cbct.png",
    shortDesc: "Captures a 3D view of your entire dental anatomy, ensuring absolute precision for complex procedures like implants.",
    benefits: ["3D comprehensive view", "Surgical precision", "Minimally invasive planning"],
    explanation: "Cone Beam Computed Tomography (CBCT) provides a three-dimensional image of your teeth, soft tissues, nerve pathways, and bone in a single scan. It is the gold standard for implant planning and complex oral surgeries.",
    howItWorks: "You stand still while the scanner rotates entirely around your head in seconds, capturing hundreds of images that are compiled into a 3D model.",
    patientComfort: "Completely non-invasive, open-air scanning that eliminates claustrophobia.",
    treatments: ["Dental Implants", "Orthodontics", "Oral Surgery"]
  },
  {
    id: "intraoral-scanner",
    name: "Intraoral Scanner",
    image: "tech_scanner.png",
    shortDesc: "Eliminates the need for messy, gag-inducing dental impressions by capturing a precise digital 3D model of your teeth.",
    benefits: ["No messy impressions", "Highly accurate fit", "Immediate digital model"],
    explanation: "The intraoral scanner is a wand-like device that takes thousands of pictures of the inside of your mouth to create a perfectly accurate 3D digital impression.",
    howItWorks: "The dentist glides the wand over your teeth, and the computer instantly pieces the images together into a 3D model on the screen.",
    patientComfort: "Say goodbye to the uncomfortable, gooey impression material that triggers the gag reflex.",
    treatments: ["Invisalign/Aligners", "Crowns & Bridges", "Veneers"]
  },
  {
    id: "intraoral-camera",
    name: "Intraoral Camera",
    image: "tech_camera.png",
    shortDesc: "Allows you to see exactly what the dentist sees, fostering transparency and better understanding of your oral health.",
    benefits: ["See what we see", "Early detection", "Enhanced transparency"],
    explanation: "This tiny camera lets us take high-definition images of the inside of your mouth. We display these images on a monitor so we can discuss our findings and treatment recommendations together.",
    howItWorks: "The camera is about the size of a dental mirror and easily captures detailed images of hidden areas and micro-fractures.",
    patientComfort: "Completely painless and allows you to participate directly in your diagnostic process.",
    treatments: ["Preventive Care", "Restorative Dentistry", "Patient Education"]
  },
  {
    id: "laser-dentistry",
    name: "Laser Dentistry",
    image: "tech_laser.png",
    shortDesc: "Provides minimally invasive treatments for gums and soft tissues with less bleeding, swelling, and faster healing.",
    benefits: ["Minimally invasive", "Faster healing", "Often pain-free"],
    explanation: "Dental lasers use focused light energy to perform a variety of soft tissue procedures. They offer extreme precision, meaning less damage to surrounding healthy tissue.",
    howItWorks: "The laser beam precisely removes or shapes tissue while simultaneously sealing blood vessels and nerve endings.",
    patientComfort: "Reduces or eliminates the need for drills and anesthesia for certain procedures.",
    treatments: ["Gum Treatment", "Smile Design (Gum Contouring)", "Frenectomy"]
  },
  {
    id: "digital-smile-design",
    name: "Digital Smile Design",
    image: "smile_designing.png", 
    shortDesc: "A digital preview of your new smile, allowing you to co-design the final result before any treatment begins.",
    benefits: ["Predictable results", "Test-drive your smile", "Customized to your face"],
    explanation: "Digital Smile Design (DSD) integrates photography, videography, and digital software to analyze your facial and dental proportions, designing a smile that perfectly matches your unique features.",
    howItWorks: "We take photos and videos of your face in motion, design the new smile digitally, and create a physical mock-up you can try in your mouth.",
    patientComfort: "Provides absolute peace of mind by showing you the final result before committing to treatment.",
    treatments: ["Smile Makeovers", "Veneers", "Full Mouth Rehab"]
  },
  {
    id: "advanced-sterilization",
    name: "Advanced Sterilization System",
    image: "tech_sterilization.png",
    shortDesc: "Ensures 100% safety with Class-B autoclaves and strict international infection control protocols.",
    benefits: ["Zero infection risk", "Hospital-grade safety", "Strict protocols"],
    explanation: "Your safety is our highest priority. We use a dedicated sterilization center featuring advanced Class-B autoclaves that use vacuum-assisted steam to sterilize every instrument completely.",
    howItWorks: "Instruments are ultrasonically cleaned, individually pouched, and subjected to high-pressure, high-temperature steam sterilization.",
    patientComfort: "Provides complete peace of mind knowing you are being treated in a pristine, hospital-grade environment.",
    treatments: ["All Procedures"]
  },
  {
    id: "modern-chairs",
    name: "Modern Dental Chairs",
    image: "equipment1.jpeg",
    shortDesc: "Ergonomically designed chairs featuring plush memory foam to keep you relaxed during longer procedures.",
    benefits: ["Maximum relaxation", "Ergonomic support", "Reduced anxiety"],
    explanation: "We believe that comfort is a crucial part of clinical care. Our modern dental chairs are designed to support your spine and neck, making even long appointments fly by.",
    howItWorks: "Fully adjustable positioning ensures you are completely relaxed while giving the dentist optimal access without awkward angles.",
    patientComfort: "Feels more like a luxury recliner than a medical chair, significantly reducing dental anxiety.",
    treatments: ["All Procedures"]
  }
];

const AdvancedTechnology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Radiance Dentistry",
    "url": "https://www.radiaancedentistry.com",
    "medicalSpecialty": "Dentistry",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Advanced Dental Technology",
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": tech.name,
          "description": tech.shortDesc
        },
        "position": index + 1
      }))
    }
  };

  return (
    <div className="technology-page">
      <Helmet>
        <title>Advanced Dental Technology | Radiance Dentistry</title>
        <meta name="description" content="Radiance Dentistry combines clinical expertise with advanced dental technology like CBCT, Digital Scanners, and Lasers to deliver precise, comfortable treatments." />
        <link rel="canonical" href="https://www.radiaancedentistry.com/advanced-technology" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="tech-hero">
        <div className="tech-hero-bg"></div>
        <div className="tech-hero-overlay"></div>
        <div className="container tech-hero-content">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-gold">INNOVATION IN CARE</h4>
            <h1>The Future of Dentistry, Today.</h1>
            <p className="max-w-700">We invest in the world's most advanced dental technology not just to be modern, but because it makes your treatment significantly safer, faster, and more comfortable.</p>
            <div className="tech-hero-actions">
              <Link to="/contact" className="btn-primary">
                <Calendar size={18} /> Book Appointment
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Why Technology Matters */}
      <section className="section bg-light">
        <div className="container">
          <FadeInWhenVisible className="text-center mb-50">
            <h2>Why Technology Matters</h2>
            <p className="max-w-700 mx-auto">Patients don't choose a clinic because it owns expensive machines. They choose us because our technology directly improves their experience.</p>
          </FadeInWhenVisible>

          <div className="tech-matters-grid">
            <FadeInWhenVisible className="tech-matter-card" delay={0}>
              <div className="tm-icon"><Target size={32} /></div>
              <h3>Pinpoint Accuracy</h3>
              <p>Digital diagnostics allow us to see exactly what is happening beneath the surface, eliminating guesswork from your treatment plan.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="tech-matter-card" delay={0.1}>
              <div className="tm-icon"><Shield size={32} /></div>
              <h3>Enhanced Safety</h3>
              <p>From low-radiation imaging to hospital-grade sterilization, modern tech drastically reduces clinical risks.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="tech-matter-card" delay={0.2}>
              <div className="tm-icon"><Star size={32} /></div>
              <h3>Superior Comfort</h3>
              <p>No more messy impressions or unnecessary drilling. We use scanners and lasers to keep you completely relaxed.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="tech-matter-card" delay={0.3}>
              <div className="tm-icon"><Clock size={32} /></div>
              <h3>Faster Recovery</h3>
              <p>Minimally invasive tools mean less trauma to your tissues, resulting in significantly shorter healing times.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technologies Section */}
      <section className="section bg-white tech-deep-dive-section">
        <div className="container">
          {technologies.map((tech, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={tech.id} className={`tech-deep-dive-row ${isEven ? '' : 'reverse'}`} id={tech.id}>
                <FadeInWhenVisible className="tech-dd-img-wrapper" delay={0.1}>
                  <img src={`/assets/${tech.image}`} alt={tech.name} className="tech-dd-img" />
                  <div className="tech-dd-decoration"></div>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible className="tech-dd-content" delay={0.2}>
                  <h3 className="tech-dd-title">{tech.name}</h3>
                  <p className="tech-dd-desc">{tech.explanation}</p>
                  
                  <div className="tech-dd-details">
                    <div className="dd-detail-block">
                      <h4><Activity size={18} className="text-medical" style={{marginRight: '8px', verticalAlign: 'middle'}}/> How it Works</h4>
                      <p>{tech.howItWorks}</p>
                    </div>
                    <div className="dd-detail-block">
                      <h4><Heart size={18} className="text-medical" style={{marginRight: '8px', verticalAlign: 'middle'}}/> Patient Comfort</h4>
                      <p>{tech.patientComfort}</p>
                    </div>
                  </div>

                  <div className="tech-dd-benefits">
                    <h4>Primary Benefits</h4>
                    <ul>
                      {tech.benefits.map((b, i) => (
                        <li key={i}><CheckCircle2 size={16} className="text-gold" style={{marginRight: '8px', verticalAlign: 'middle', flexShrink: 0}} /> <span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
              </div>
            );
          })}
        </div>
      </section>

      {/* Patient Experience Timeline */}
      <section className="section bg-light tech-timeline-section">
        <div className="container">
          <FadeInWhenVisible className="text-center mb-50">
            <h2>The Digital Patient Journey</h2>
            <p className="max-w-700 mx-auto">How our technology integrates into your seamless experience.</p>
          </FadeInWhenVisible>

          <div className="tech-timeline">
            <FadeInWhenVisible className="timeline-item">
              <div className="timeline-dot">1</div>
              <div className="timeline-content">
                <h4>Digital Consultation</h4>
                <p>We use intraoral cameras to show you exactly what is happening in your mouth on a large screen.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="timeline-item" delay={0.1}>
              <div className="timeline-dot">2</div>
              <div className="timeline-content">
                <h4>3D Diagnosis</h4>
                <p>Digital X-rays and CBCT scans provide a comprehensive, low-radiation blueprint of your anatomy.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="timeline-item" delay={0.2}>
              <div className="timeline-dot">3</div>
              <div className="timeline-content">
                <h4>Precision Planning</h4>
                <p>We design your treatment digitally, allowing you to preview the final result before we begin.</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="timeline-item" delay={0.3}>
              <div className="timeline-dot">4</div>
              <div className="timeline-content">
                <h4>Comfortable Procedure</h4>
                <p>Using lasers and modern tools, the actual procedure is minimally invasive and highly predictable.</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="td-cta-section">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>Experience the Difference</h2>
            <p className="max-w-700 mx-auto mb-40">Don't settle for outdated dentistry. Experience precision, comfort, and safety at Radiance Dentistry.</p>
            <div className="td-cta-buttons">
              <Link to="/contact" className="td-btn-primary-large">Book Appointment</Link>
              <a href="tel:+918800201089" className="td-btn-outline-large bg-white">Call Now</a>
              <a href="https://wa.me/918800201089" target="_blank" rel="noopener noreferrer" className="td-btn-whatsapp">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default AdvancedTechnology;
