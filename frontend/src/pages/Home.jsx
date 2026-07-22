import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import TechnologyAccordion from '../components/ui/TechnologyAccordion';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import TransformationsSlider from '../components/ui/TransformationsSlider';
import MasonryGallery from '../components/ui/MasonryGallery';
import ImageLightbox from '../components/ui/ImageLightbox';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import VideoTestimonialsSection from '../components/ui/VideoTestimonialsSection';
import MapEmbed from '../components/ui/MapEmbed';
import { reviewsData } from '../data/reviewsData';
import { Shield, Star, Clock, Award, CheckCircle2, ChevronRight, Play, Phone, Monitor, UserCheck, Sparkles, Stethoscope, Heart, Activity, MapPin, Mail, Calendar, Car, Building2, Accessibility, Armchair, Microscope, Navigation, MessageCircle } from 'lucide-react';
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
            <h2>The Radiaance Difference</h2>
            <p className="max-w-700 mx-auto mb-40">Setting a new standard in dental excellence.</p>
          </FadeInWhenVisible>
          <div className="features-grid">
            {[
              { icon: <Shield />, title: "Uncompromising Safety", desc: "Highest standards of sterilization." },
              { icon: <Star />, title: "Luxury Experience", desc: "Comfort at every touchpoint." },
              { icon: <Clock />, title: "Respect for Time", desc: "Prompt, unhurried appointments." },
              { icon: <Award />, title: "Master Craftsmanship", desc: "Flawless aesthetic results." }
            ].map((item, idx) => (
              <FadeInWhenVisible key={idx} className="feature-card">
                <div className="icon-wrapper">{item.icon}</div>
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

            <div className="stats-row">
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
          <div className="text-center mb-40">
            <h4 className="section-subtitle">MEET YOUR DENTIST</h4>
            <h2>Expert Care. Gentle Hands. Beautiful Smiles.</h2>
            <p className="max-w-700 mx-auto intro-text">Meet the experienced professional behind Radiaance Dentistry, dedicated to providing ethical, personalized, and modern dental care.</p>
          </div>
          
          <div className="doctor-grid-premium">
            <FadeInWhenVisible className="doctor-image-col">
              <img src="/assets/doctor pic.jpeg" alt="Dr. Ruchi Jain" className="doctor-real-img" />
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="doctor-info-col" delay={0.2}>
              <h2 className="doctor-name-heading">
                Meet Your Dentist, <br />
                <span className="text-gold">Dr. Ruchi Jain</span>
              </h2>
              <h3 className="doctor-subheading">Creating Healthy Smiles Through Compassion &amp; Clinical Excellence</h3>
              
              <div className="doctor-education glassmorphism-subtle mb-30">
                <p><strong>Bachelor of Dental Surgery (BDS)</strong></p>
                <p>KLE Society's Institute of Dental Sciences, Belgaum</p>
                <p>Rajiv Gandhi University of Health Sciences, Karnataka</p>
                <p className="text-gold mt-10"><em>Awarded in 2005</em></p>
              </div>

              <div className="doctor-focus-list mb-30">
                <p><CheckCircle2 size={18} className="text-gold"/> Patient-centered care</p>
                <p><CheckCircle2 size={18} className="text-gold"/> Ethical dentistry</p>
                <p><CheckCircle2 size={18} className="text-gold"/> Modern technology</p>
                <p><CheckCircle2 size={18} className="text-gold"/> Comfortable treatment</p>
                <p><CheckCircle2 size={18} className="text-gold"/> Personalized care</p>
              </div>

              <div className="qualification-cards mb-30">
                <div className="qual-card glassmorphism hover-lift">
                  <Award size={20} className="text-gold" />
                  <span>Bachelor of Dental Surgery</span>
                </div>
                <div className="qual-card glassmorphism hover-lift">
                  <Heart size={20} className="text-gold" />
                  <span>Patient First Care</span>
                </div>
                <div className="qual-card glassmorphism hover-lift">
                  <Activity size={20} className="text-gold" />
                  <span>Modern Dental Technology</span>
                </div>
                <div className="qual-card glassmorphism hover-lift">
                  <Shield size={20} className="text-gold" />
                  <span>Ethical Dentistry</span>
                </div>
              </div>

              <div className="expertise-section mb-40">
                <h5 className="mb-15">Areas of Expertise</h5>
                <div className="expertise-chips">
                  {['Smile Designing', 'Dental Implants', 'Root Canal', 'Cosmetic Dentistry', 'Family Dentistry', 'Preventive Dentistry', 'Teeth Whitening', 'Dental Veneers'].map((chip, idx) => (
                    <span key={idx} className="expertise-chip">{chip}</span>
                  ))}
                </div>
              </div>

              <div className="doctor-actions">
                <KnowMoreBtn to="/contact" text="Book Appointment" variant="primary" />
                <KnowMoreBtn to="/doctor/dr-ruchi-jain" text="Know More" variant="gold" />
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
            {treatmentsList.map((treatment, idx) => (
              <FadeInWhenVisible key={idx} className="treatment-card premium-hover">
                <div className="treatment-img-wrapper">
                  <img src={`/assets/${treatment.image}`} alt={treatment.name} loading="lazy" />
                  <div className="treatment-overlay-gradient"></div>
                </div>
                <div className="treatment-content">
                  <h3>{treatment.name}</h3>
                  <p>{treatment.desc}</p>
                  <div className="treatment-actions">
                    <Link to={`/treatments/${treatment.slug}`} className="btn-know-more text-gold">
                      Know More <ChevronRight size={16} />
                    </Link>
                    <KnowMoreBtn to="/contact" text="Book Appointment" variant="outline" className="btn-sm" />
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Advanced Technology */}
      <section className="section technology-section">
        <div className="container tech-grid">
          <FadeInWhenVisible className="tech-content">
            <h4 className="section-subtitle">ADVANCED DENTAL TECHNOLOGY</h4>
            <h2>Innovation at Your Service</h2>
            <p>Radiaance Dentistry combines modern technology with clinical expertise to deliver safer procedures, precise diagnosis, faster recovery, and exceptional patient comfort.</p>
            
            <div className="tech-stats-grid">
              <div className="tech-stat-card">
                <CheckCircle2 className="icon-gold" size={24} />
                <span>99% Diagnostic Accuracy</span>
              </div>
              <div className="tech-stat-card">
                <CheckCircle2 className="icon-gold" size={24} />
                <span>Low Radiation Imaging</span>
              </div>
              <div className="tech-stat-card">
                <CheckCircle2 className="icon-gold" size={24} />
                <span>Comfortable Digital Procedures</span>
              </div>
              <div className="tech-stat-card">
                <CheckCircle2 className="icon-gold" size={24} />
                <span>International Sterilization Standards</span>
              </div>
            </div>

            <KnowMoreBtn to="/advanced-technology" text="Explore Our Technology" />
          </FadeInWhenVisible>
          <FadeInWhenVisible className="tech-visuals" delay={0.2}>
            <TechnologyAccordion />
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 8. Smile Gallery */}
      <section className="section gallery-section bg-light">
        <div className="container">
          <div className="text-center">
            <FadeInWhenVisible>
              <h4 className="section-subtitle">TRANSFORMATIONS</h4>
              <h2>Real Patients. Real Results.</h2>
              <p className="max-w-700 mx-auto mb-40 text-secondary text-md">Life-changing smiles crafted with precision and care.</p>
              
              <div className="compact-stats-strip">
                <div className="compact-stat">
                  <Star className="icon-gold" size={18} />
                  <span>500+ Smiles</span>
                </div>
                <div className="compact-stat">
                  <Sparkles className="icon-gold" size={18} />
                  <span>Personalized Design</span>
                </div>
                <div className="compact-stat">
                  <CheckCircle2 className="icon-gold" size={18} />
                  <span>Natural Results</span>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          <div className="transformations-container mt-40">
            <FadeInWhenVisible>
              <TransformationsSlider cases={[
                {
                  afterImage: "/assets/smile makover.png",
                  beforeImage: "/assets/smile makover.png",
                  treatmentName: "Smile Makeover",
                  description: "Complete transformation using custom porcelain veneers.",
                  treatmentSlug: "smile-makeover"
                },
                {
                  afterImage: "/assets/clear_aligners.png",
                  beforeImage: "/assets/clear_aligners.png",
                  treatmentName: "Clear Aligners",
                  description: "Orthodontic correction of crowding.",
                  treatmentSlug: "clear-aligners"
                },
                {
                  afterImage: "/assets/dental_implants.png",
                  beforeImage: "/assets/dental_implants.png",
                  treatmentName: "Dental Implants",
                  description: "Restoring form and function seamlessly.",
                  treatmentSlug: "dental-implants"
                }
              ]} />
            </FadeInWhenVisible>
            <div className="text-center mt-40">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
            </div>
          </div>

          <div className="smile-gallery-container mt-40">
            <h3 className="text-center mb-40 text-navy">Smile Gallery</h3>
            <FadeInWhenVisible>
              <MasonryGallery 
                images={fullGalleryData.slice(0, 8)} 
                onImageClick={openLightbox} 
              />
            </FadeInWhenVisible>
          </div>

          <div className="text-center mt-40">
            <KnowMoreBtn to="/smile-gallery" text="View Full Smile Gallery" variant="outline" />
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
