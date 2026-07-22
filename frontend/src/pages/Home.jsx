import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import TransformationsSlider from '../components/ui/TransformationsSlider';
import MasonryGallery from '../components/ui/MasonryGallery';
import ImageLightbox from '../components/ui/ImageLightbox';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import VideoTestimonialsSection from '../components/ui/VideoTestimonialsSection';
import MapEmbed from '../components/ui/MapEmbed';
import { reviewsData } from '../data/reviewsData';
import { Shield, Star, Clock, Award, CheckCircle2, ChevronRight, Play, Phone, Monitor, UserCheck, Sparkles, Stethoscope, Heart, Activity, MapPin, Mail, Calendar, Car, Building2, Accessibility, Armchair, Microscope, Navigation, MessageCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import { treatmentsList } from '../data/treatments';
import { fullGalleryData } from '../data/gallery';

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="home-page">
      {/* 1. Hero Section (Enhanced Cinematic) */}
      <section className="hero-section">
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
          <div className="hero-overlay-cinematic"></div>
        </div>
        
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="hero-text-container"
          >
            <span className="hero-brand">RADIAANCE DENTISTRY</span>
            <h1 className="hero-title">
              <span className="hero-title-main">Artistry in Every</span>
              <span className="hero-title-highlight">Smile</span>
            </h1>
            <p className="hero-subtitle">Experience world-class luxury dental care tailored to your unique needs.</p>
            <div className="hero-actions">
              <KnowMoreBtn to="/contact" text="Book Consultation" variant="gold" className="hero-btn-primary" />
              <KnowMoreBtn to="/services" text="Explore Treatments" variant="outline" className="hero-btn-secondary" />
            </div>
          </motion.div>
        </div>

        {/* Premium Trust Strip */}
        <div className="hero-trust-strip glassmorphism-dark">
          <div className="container">
            <div className="trust-strip-grid">
              <div className="trust-strip-item">
                <Monitor className="icon-gold" size={20} />
                <span>Advanced Technology</span>
              </div>
              <div className="trust-strip-item">
                <Heart className="icon-gold" size={20} />
                <span>Personalized Dental Care</span>
              </div>
              <div className="trust-strip-item">
                <Navigation className="icon-gold" size={20} />
                <span>International Patients Welcome</span>
              </div>
              <div className="trust-strip-item">
                <Shield className="icon-gold" size={20} />
                <span>Strict Sterilization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us (Trust) */}
      <section className="section why-us-section bg-light">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h4 className="section-subtitle">WHY CHOOSE US</h4>
            <h2>Why Patients Trust Radiaance Dentistry</h2>
            <p className="max-w-700 mx-auto mb-40 text-secondary">We combine clinical excellence with a luxurious, patient-first approach to redefine your dental experience.</p>
          </FadeInWhenVisible>

          <FadeInWhenVisible className="trust-stats-banner mb-60">
             <div className="stat-item">
                <AnimatedCounter end={5000} suffix="+" />
                <p>Happy Smiles</p>
             </div>
             <div className="stat-item">
                <AnimatedCounter end={100} suffix="%" />
                <p>Patient Satisfaction</p>
             </div>
             <div className="stat-item text-only">
                <p>Advanced<br/>Dental Technology</p>
             </div>
             <div className="stat-item text-only">
                <p>Patient<br/>First Care</p>
             </div>
          </FadeInWhenVisible>

          <div className="premium-trust-grid">
            {[
              { icon: <Monitor />, title: "Modern Equipment", desc: "State-of-the-art diagnostic and treatment technology." },
              { icon: <Award />, title: "Experienced Dentist", desc: "Expertise you can rely on for flawless results." },
              { icon: <Armchair />, title: "Comfortable Environment", desc: "A serene sanctuary designed to relax you." },
              { icon: <Heart />, title: "Pain-Free Dentistry", desc: "Gentle techniques for a stress-free visit." },
              { icon: <Shield />, title: "Strict Sterilization", desc: "Uncompromising international safety protocols." },
              { icon: <UserCheck />, title: "Personalized Care", desc: "Treatment plans tailored uniquely for you." },
              { icon: <Star />, title: "Premium Patient Experience", desc: "Luxury service from the moment you step in." }
            ].map((item, idx) => (
              <FadeInWhenVisible key={idx} className={`premium-trust-card glassmorphism ${idx === 6 ? 'card-wide' : ''}`}>
                <div className="trust-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Welcome Section */}
      <section className="section welcome-section">
        <div className="container welcome-grid">
          <FadeInWhenVisible className="welcome-images">
             <div className="collage-wrapper">
                <img src="/assets/reception.jpeg" className="img-large parallax" alt="Clinic Reception" />
                <img src="/assets/office.jpeg" className="img-small img-overlap-1 parallax" alt="Clinic Office" />
                <img src="/assets/treatment_area.jpeg" className="img-small img-overlap-2 parallax" alt="Treatment Area" />
                
                <div className="accent-card glassmorphism float-anim">
                   <p><CheckCircle2 size={16} className="text-gold"/> Modern Dental Clinic</p>
                   <p><CheckCircle2 size={16} className="text-gold"/> Advanced Technology</p>
                </div>
             </div>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible className="welcome-content">
            <h4 className="section-subtitle">WELCOME TO RADIAANCE DENTISTRY</h4>
            <h2>Crafting Healthy Smiles with Precision &amp; Care</h2>
            <p className="intro-text">Experience premium dental care where advanced technology, personalized treatment, and compassionate professionals come together to create healthy, confident smiles.</p>
            <p className="body-text">Welcome to Radiaance Dentistry, a modern dental clinic committed to delivering exceptional oral healthcare in a calm, comfortable, and hygienic environment. Every patient receives personalized attention, transparent treatment planning, and the highest standard of clinical care. From preventive dentistry to complete smile transformations, our goal is to help every patient smile with confidence.</p>
            
            <div className="features-list-luxury">
               <div className="luxury-feature-card glassmorphism">
                 <div className="icon-wrapper outline"><Monitor size={24}/></div>
                 <div>
                   <h4>Advanced Dental Technology</h4>
                   <p>Modern digital equipment for accurate diagnosis and comfortable treatment.</p>
                 </div>
               </div>
               <div className="luxury-feature-card glassmorphism">
                 <div className="icon-wrapper outline"><UserCheck size={24}/></div>
                 <div>
                   <h4>Personalized Care</h4>
                   <p>Customized treatment plans designed specifically for every patient.</p>
                 </div>
               </div>
               <div className="luxury-feature-card glassmorphism">
                 <div className="icon-wrapper outline"><Sparkles size={24}/></div>
                 <div>
                   <h4>Comfort &amp; Hygiene</h4>
                   <p>International sterilization standards in a relaxing environment.</p>
                 </div>
               </div>
               <div className="luxury-feature-card glassmorphism">
                 <div className="icon-wrapper outline"><Stethoscope size={24}/></div>
                 <div>
                   <h4>Complete Dental Solutions</h4>
                   <p>Comprehensive dental treatments under one roof.</p>
                 </div>
               </div>
            </div>



            <div className="welcome-actions mt-40">
               <KnowMoreBtn to="/contact" text="Book Appointment" variant="primary" />
               <KnowMoreBtn to="/about-clinic" text="Know More" variant="gold" />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 4. About Clinic */}
      <section className="section about-section bg-light">
        <div className="container about-grid">
          <FadeInWhenVisible className="about-image-wrapper">
            <img src="/assets/office.jpeg" alt="Radiaance Dentistry Clinic" className="about-clinic-img luxury-radius" />
          </FadeInWhenVisible>
          <FadeInWhenVisible className="about-content">
            <h2>A Sanctuary for Your Smile</h2>
            <p>Designed with your comfort in mind, our clinic offers a serene environment, state-of-the-art sterilization protocols, and a patient-first approach.</p>
            <ul className="feature-list">
              <li><CheckCircle2 className="icon-gold" /> Premium Amenities</li>
              <li><CheckCircle2 className="icon-gold" /> Zero-Wait Policy</li>
              <li><CheckCircle2 className="icon-gold" /> Personalized Care Plans</li>
            </ul>
            <KnowMoreBtn to="/tour-the-clinic" text="Tour The Clinic" />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 5. Meet Dr Ruchi Jain */}
      <section className="section doctor-section">
        <div className="container">
          <div className="doctor-editorial-grid">
            {/* Left Column: Portrait */}
            <FadeInWhenVisible className="doctor-portrait-wrapper">
              <img src="/assets/doctor pic.jpeg" alt="Dr. Ruchi Jain" className="doctor-portrait-img" />
              <div className="doctor-name-badge glassmorphism">
                <h3>Dr. Ruchi Jain</h3>
                <p className="text-gold">Chief Dental Surgeon</p>
                <p className="badge-degree">BDS (2005) - KLE Society</p>
              </div>
            </FadeInWhenVisible>
            
            {/* Right Column: Content */}
            <FadeInWhenVisible className="doctor-editorial-content" delay={0.2}>
              <h4 className="section-subtitle">MEET YOUR DENTIST</h4>
              <h2 className="mb-20">Artistry &amp; Precision in Every Treatment</h2>
              <p className="doctor-bio mb-30">
                With nearly two decades of clinical experience, Dr. Ruchi Jain is the visionary behind Radiaance Dentistry. She combines advanced dental technology with a gentle, compassionate touch to deliver flawless aesthetic and functional results.
              </p>
              
              <div className="doctor-philosophy glassmorphism-subtle mb-40">
                <p className="philosophy-text">
                  "My philosophy is simple: Treat every patient like family. We focus on ethical, pain-free dentistry tailored to your unique needs, ensuring you leave our sanctuary with a confident, radiant smile."
                </p>
              </div>

              <div className="expertise-section mb-40">
                <h5 className="mb-20 text-navy">Clinical Expertise</h5>
                <div className="expertise-tags">
                  {['Smile Designing', 'Dental Implants', 'Root Canal Therapy', 'Cosmetic Dentistry', 'Preventive Care', 'Teeth Whitening', 'Porcelain Veneers'].map((chip, idx) => (
                    <span key={idx} className="premium-chip">{chip}</span>
                  ))}
                </div>
              </div>

              <div className="doctor-actions">
                <KnowMoreBtn to="/contact" text="Book Appointment" variant="primary" />
                <KnowMoreBtn to="/doctor/dr-ruchi-jain" text="Read Full Profile" variant="outline" className="btn-outline-navy" />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 6. Our Treatments */}
      <section className="section treatments-section bg-light">
        <div className="container">
          <FadeInWhenVisible className="text-center mb-40">
            <h4 className="section-subtitle">OUR TREATMENTS</h4>
            <h2>Complete Dental Care for Every Smile</h2>
            <p className="max-w-800 mx-auto intro-text">
              From preventive care to advanced smile transformations, Radiaance Dentistry offers comprehensive dental solutions using modern technology, personalized treatment plans, and ethical dentistry.
            </p>
          </FadeInWhenVisible>
          
          <div className="treatments-grid">
            {treatmentsList.map((treatment, idx) => {
              const IconComponent = LucideIcons[treatment.icon] || LucideIcons.Activity;
              return (
                <FadeInWhenVisible key={idx} className="premium-service-card hover-lift">
                  <div className="service-icon-wrapper">
                    <IconComponent size={28} />
                  </div>
                  <div className="service-card-content">
                    <h3>{treatment.name}</h3>
                    <p>{treatment.desc}</p>
                    <Link to={`/treatments/${treatment.slug}`} className="service-know-more">
                      Know More <ChevronRight size={16} />
                    </Link>
                  </div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Advanced Technology Showcase */}
      <section className="section technology-showcase-section bg-white">
        <div className="container">
          <FadeInWhenVisible className="text-center mb-50">
            <div className="badge-gold mb-15">ADVANCED TECHNOLOGY</div>
            <h2>Modern Technology for Exceptional Dental Care</h2>
            <p className="max-w-800 mx-auto intro-text">
              We combine clinical expertise with advanced dental technology to deliver precise diagnoses, comfortable treatments, and predictable results.
            </p>
          </FadeInWhenVisible>

          <div className="tech-showcase-list">
            {[
              { id: "xray", name: "Digital X-Ray", image: "tech_xray.png", desc: "Provides highly detailed images while exposing patients to significantly less radiation compared to traditional X-rays.", benefits: ["Faster diagnosis", "Better treatment planning", "Greater safety"] },
              { id: "cbct", name: "CBCT Scanner", image: "tech_cbct.png", desc: "Captures a 3D view of your entire dental anatomy, ensuring absolute precision for complex procedures like implants.", benefits: ["3D comprehensive view", "Surgical precision", "Minimally invasive planning"] },
              { id: "scanner", name: "Intraoral Scanner", image: "tech_scanner.png", desc: "Eliminates the need for messy, gag-inducing dental impressions by capturing a precise digital 3D model of your teeth.", benefits: ["No messy impressions", "Highly accurate fit", "Immediate digital model"] },
              { id: "camera", name: "Intraoral Camera", image: "tech_camera.png", desc: "Allows you to see exactly what the dentist sees, fostering transparency and better understanding of your oral health.", benefits: ["See what we see", "Early detection", "Enhanced transparency"] },
              { id: "laser", name: "Laser Dentistry", image: "tech_laser.png", desc: "Provides minimally invasive treatments for gums and soft tissues with less bleeding, swelling, and faster healing.", benefits: ["Minimally invasive", "Faster healing", "Often pain-free"] },
              { id: "dsd", name: "Digital Smile Design", image: "smile_designing.png", desc: "A digital preview of your new smile, allowing you to co-design the final result before any treatment begins.", benefits: ["Predictable results", "Test-drive your smile", "Customized to your face"] },
              { id: "sterilization", name: "Advanced Sterilization System", image: "tech_sterilization.png", desc: "Ensures 100% safety with Class-B autoclaves and strict international infection control protocols.", benefits: ["Zero infection risk", "Hospital-grade safety", "Strict protocols"] },
              { id: "chairs", name: "Modern Dental Chairs", image: "equipment1.jpeg", desc: "Ergonomically designed chairs featuring plush memory foam to keep you relaxed during longer procedures.", benefits: ["Maximum relaxation", "Ergonomic support", "Reduced anxiety"] }
            ].map((tech, idx) => (
              <div key={tech.id} className={`tech-showcase-row ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                <FadeInWhenVisible className="tech-showcase-img-col">
                  <div className="tech-showcase-img-wrapper glassmorphism">
                    <img src={`/assets/${tech.image}`} alt={tech.name} loading="lazy" />
                  </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible className="tech-showcase-content-col" delay={0.2}>
                  <h3>{tech.name}</h3>
                  <p className="tech-desc">{tech.desc}</p>
                  
                  <div className="tech-benefits-box">
                    <div className="benefit-label">Patient Benefit</div>
                    <ul className="benefit-list">
                      {tech.benefits.map((b, i) => (
                        <li key={i}><CheckCircle2 size={16} className="text-medical" /> <span>{b}</span></li>
                      ))}
                    </ul>
                  </div>

                  <Link to={`/advanced-technology#${tech.id}`} className="service-know-more mt-20">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-50">
            <Link to="/advanced-technology" className="btn-primary">
              View Full Technology Gallery <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Smile Gallery */}
      <section className="section gallery-section bg-light">
        <div className="container">
          <div className="text-center">
            <FadeInWhenVisible>
              <div className="badge-gold mb-15">SMILE TRANSFORMATIONS</div>
              <h2>Real Smiles. Real Transformations.</h2>
              <p className="max-w-700 mx-auto mb-40 text-secondary text-md">Explore real patient journeys and discover how personalized dental care transformed their smiles with confidence.</p>
            </FadeInWhenVisible>
          </div>

          <div className="transformations-container mt-40">
            <FadeInWhenVisible>
              <TransformationsSlider cases={fullGalleryData.slice(0, 6)} />
            </FadeInWhenVisible>
          </div>

          <div className="text-center mt-50">
            <Link to="/smile-gallery" className="btn-outline-navy">
              View Complete Smile Gallery <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        imageSrc={fullGalleryData[lightboxIndex]?.src} 
        altText={fullGalleryData[lightboxIndex]?.treatment} 
      />

      {/* 9. Video Testimonials */}
      <VideoTestimonialsSection />

      {/* 10. Patient Testimonials */}
      <section className="section testimonials-section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <FadeInWhenVisible>
              <h4 className="section-subtitle">PATIENT TESTIMONIALS</h4>
              <h2 className="text-navy">Stories of Radiaance</h2>
              <p className="max-w-700 mx-auto mb-20 text-secondary">Real experiences shared by our valued patients.</p>
              
              <div className="trust-section mt-30">
                <div className="stars mb-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="icon-gold" fill="currentColor" />
                  ))}
                </div>
                <h4 className="text-navy m-0">Trusted by Happy Patients</h4>
                <p className="text-sm text-secondary mt-10 font-medium">Real Reviews • Real Smiles • Real Experiences</p>
              </div>
            </FadeInWhenVisible>
          </div>

          <FadeInWhenVisible delay={0.2}>
            <TestimonialCarousel reviews={reviewsData} />
          </FadeInWhenVisible>

          <div className="text-center mt-40">
            <KnowMoreBtn to="/reviews" text="Read All Reviews" variant="gold" />
          </div>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="section faq-section">
        <div className="container faq-grid">
          <FadeInWhenVisible>
            <h2>Common Questions</h2>
            <p>Everything you need to know about your journey with us.</p>
            <div className="mt-20">
              <KnowMoreBtn to="/faqs" text="View All FAQs" />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="faq-list">
            {[
              "What happens during my first consultation?",
              "Do you offer sedation options for anxious patients?",
              "What financing options are available?"
            ].map((q, idx) => (
              <div key={idx} className="faq-item">
                <h3>{q}</h3>
                <ChevronRight className="icon-gold" />
              </div>
            ))}
          </FadeInWhenVisible>
        </div>
      </section>
      {/* 11. Visit Us */}
      <section className="section visit-us-section bg-navy text-white">
        <div className="container">
          <div className="text-center mb-40">
            <FadeInWhenVisible>
              <h4 className="section-subtitle text-gold">VISIT US</h4>
              <h2 className="text-white">Find Radiaance Dentistry</h2>
              <p className="max-w-700 mx-auto text-light">Conveniently located in the heart of Vesu, Surat. Visit our modern dental clinic for world-class dental care in a comfortable and welcoming environment.</p>
            </FadeInWhenVisible>
          </div>

          <div className="visit-grid">
            <FadeInWhenVisible className="visit-info-card glassmorphism-dark">
              <h3 className="text-white mb-30">Clinic Information</h3>
              
              <div className="contact-details mb-40">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={24} /></div>
                  <div>
                    <h5 className="text-gold mb-5">Address</h5>
                    <p className="text-light m-0">Shop No. 518, 5th Floor,<br />Western Business Park,<br />Vesu, Surat – 395007</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><Phone size={24} /></div>
                  <div>
                    <h5 className="text-gold mb-5">Phone</h5>
                    <p className="text-light m-0"><a href="tel:8696781255" className="text-light">8696781255</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Mail size={24} /></div>
                  <div>
                    <h5 className="text-gold mb-5">Email</h5>
                    <p className="text-light m-0"><a href="mailto:drruchijain30@gmail.com" className="text-light">drruchijain30@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Calendar size={24} /></div>
                  <div>
                    <h5 className="text-gold mb-5">Working Hours</h5>
                    <p className="text-light m-0">Mon – Sat: 10:00 AM – 7:00 PM<br />Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>

              <div className="visit-actions">
                <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
                <div className="action-buttons-row">
                  <a href="https://www.google.com/maps/dir/?api=1&destination=Western+Business+Park,+Vesu,+Surat" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm flex-1 text-center justify-center">
                    <Navigation size={16} /> Get Directions
                  </a>
                  <a href="tel:8696781255" className="btn btn-outline-light btn-sm flex-1 text-center justify-center">
                    <Phone size={16} /> Call Now
                  </a>
                  <a href="https://wa.me/918696781255" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm flex-1 text-center justify-center">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="why-visit-us mt-40">
                <h4 className="text-white mb-20 text-sm border-b border-light pb-10">Why Visit Us</h4>
                <div className="why-visit-grid">
                  <div className="why-visit-item"><MapPin size={16} className="text-gold"/> Easy to Reach</div>
                  <div className="why-visit-item"><Car size={16} className="text-gold"/> Ample Parking</div>
                  <div className="why-visit-item"><Building2 size={16} className="text-gold"/> Modern Facility</div>
                  <div className="why-visit-item"><Accessibility size={16} className="text-gold"/> Wheelchair Access</div>
                  <div className="why-visit-item"><Armchair size={16} className="text-gold"/> Comfortable Lounge</div>
                  <div className="why-visit-item"><Microscope size={16} className="text-gold"/> Advanced Tech</div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} className="visit-map-container">
              <MapEmbed />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* 12. Contact */}
      <section className="section contact-section">
        <div className="container contact-box">
          <FadeInWhenVisible className="text-center">
            <h2>Ready for Your Transformation?</h2>
            <p className="max-w-700 mx-auto mb-40">Schedule your exclusive consultation today and take the first step towards your dream smile.</p>
            <div className="contact-actions">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
              <a href="tel:8696781255" className="btn btn-primary"><Phone size={18} /> Call Us Directly</a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
};

export default Home;
