import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Shield, Star, Clock, Award, CheckCircle2, ChevronRight, Play, Phone, Monitor, UserCheck, Sparkles, Stethoscope, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const treatmentsList = [
  { name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements for a complete smile.", slug: "dental-implants", image: "dental_implants.png" },
  { name: "Root Canal Treatment", desc: "Pain-free procedures to save infected teeth and restore oral health.", slug: "root-canal-treatment", image: "root_canal.png" },
  { name: "Smile Designing", desc: "Customized cosmetic plans to achieve your perfect, radiant smile.", slug: "smile-designing", image: "smile_designing.png" },
  { name: "Teeth Whitening", desc: "Professional bleaching treatments for a brighter, whiter smile.", slug: "teeth-whitening", image: "teeth_whitening.png" },
  { name: "Dental Veneers", desc: "Ultra-thin porcelain shells to correct chips, stains, and gaps.", slug: "dental-veneers", image: "dental_veneers.png" },
  { name: "Dental Crowns", desc: "Durable caps to restore the shape, size, and strength of damaged teeth.", slug: "dental-crowns", image: "dental_crowns.png" },
  { name: "Dental Bridges", desc: "Fixed dental prosthetics to seamlessly bridge the gap of missing teeth.", slug: "dental-bridges", image: "dental_bridges.png" },
  { name: "Braces & Orthodontics", desc: "Traditional and advanced solutions to align and straighten your teeth.", slug: "braces-orthodontics", image: "braces_orthodontics.png" },
  { name: "Clear Aligners", desc: "Invisible, comfortable aligners for a discreet orthodontic treatment.", slug: "clear-aligners", image: "clear_aligners.png" },
  { name: "Pediatric Dentistry", desc: "Gentle and fun dental care tailored specifically for children.", slug: "pediatric-dentistry", image: "pediatric_dentistry.png" },
  { name: "Wisdom Tooth Removal", desc: "Safe and comfortable extractions of impacted or problematic wisdom teeth.", slug: "wisdom-tooth-removal", image: "wisdom_tooth_removal.png" },
  { name: "Tooth Extraction", desc: "Painless removal of severely damaged or decayed teeth.", slug: "tooth-extraction", image: "tooth extractionj.png" },
  { name: "Dental Cleaning", desc: "Thorough professional cleaning to maintain optimal oral hygiene.", slug: "dental-cleaning", image: "dental cleaning.png" },
  { name: "Gum Treatment", desc: "Advanced periodontal care to treat and prevent gum disease.", slug: "gum-treatment", image: "gum treatment.png" },
  { name: "Smile Makeover", desc: "Comprehensive cosmetic treatments for a total smile transformation.", slug: "smile-makeover", image: "smile makover.png" },
  { name: "Full Mouth Rehabilitation", desc: "Extensive restorative procedures to rebuild your entire smile.", slug: "full-mouth-rehabilitation", image: "full mouth rehabilation.png" },
  { name: "Family Dentistry", desc: "Comprehensive dental care for patients of all ages under one roof.", slug: "family-dentistry", image: "family dentistry.png" },
  { name: "Emergency Dental Care", desc: "Immediate, priority treatment for unexpected dental pain or injuries.", slug: "emergency-dental-care", image: "emergency dental care.png" },
  { name: "Oral Surgery", desc: "Expert surgical procedures for complex dental and maxillofacial conditions.", slug: "oral-surgery", image: "oral surgery.png" }
];

// Reusable Section Reveal Component
const FadeInWhenVisible = ({ children, className = "" }) => {
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
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <main className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
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
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1>Artistry in Every Smile</h1>
            <p>Experience world-class luxury dental care tailored to your unique needs.</p>
            <div className="hero-actions">
              <KnowMoreBtn to="/contact" text="Book Consultation" variant="gold" />
              <KnowMoreBtn to="/services" text="Explore Treatments" variant="primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Welcome Section */}
      {/* 2. Welcome Section */}
      <section className="section welcome-section bg-light">
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
            <h4 className="section-subtitle">WELCOME TO RADIANCE DENTISTRY</h4>
            <h2>Crafting Healthy Smiles with Precision &amp; Care</h2>
            <p className="intro-text">Experience premium dental care where advanced technology, personalized treatment, and compassionate professionals come together to create healthy, confident smiles.</p>
            <p className="body-text">Welcome to Radiance Dentistry, a modern dental clinic committed to delivering exceptional oral healthcare in a calm, comfortable, and hygienic environment. Every patient receives personalized attention, transparent treatment planning, and the highest standard of clinical care. From preventive dentistry to complete smile transformations, our goal is to help every patient smile with confidence.</p>
            
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

      {/* 3. About Clinic */}
      <section className="section about-section">
        <div className="container about-grid">
          <FadeInWhenVisible className="about-image-wrapper">
            <div className="image-placeholder luxury-radius">Clinic Image Placeholder</div>
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

      {/* 4. Meet Dr Ruchi Jain */}
      <section className="section doctor-section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <h4 className="section-subtitle">MEET YOUR DENTIST</h4>
            <h2>Expert Care. Gentle Hands. Beautiful Smiles.</h2>
            <p className="max-w-700 mx-auto intro-text">Meet the experienced professional behind Radiance Dentistry, dedicated to providing ethical, personalized, and modern dental care.</p>
          </div>
          
          <div className="doctor-grid-premium">
            <FadeInWhenVisible className="doctor-image-col">
              <div className="premium-portrait-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-emoji">👩‍⚕️</span>
                  <span className="placeholder-title">Doctor Photo</span>
                  <span className="placeholder-subtitle">(Will be automatically replaced when image is uploaded)</span>
                </div>
                {/* Real image will be placed here eventually */}
              </div>
              <div className="photo-coming-soon-badge glassmorphism">
                <Sparkles size={16} className="text-gold" />
                <span>Photo Coming Soon</span>
              </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible className="doctor-info-col" delay={0.2}>
              <h4 className="section-subtitle text-gold">Meet Dr. Ruchi Jain</h4>
              <h2>Creating Healthy Smiles Through Compassion &amp; Clinical Excellence</h2>
              
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

      {/* 5. Why Choose Us */}
      <section className="section why-us-section bg-light">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>The Radiance Difference</h2>
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

      {/* 6. Our Treatments */}
      <section className="section treatments-section">
        <div className="container">
          <FadeInWhenVisible className="text-center mb-40">
            <h4 className="section-subtitle">OUR TREATMENTS</h4>
            <h2>Complete Dental Care for Every Smile</h2>
            <p className="max-w-800 mx-auto intro-text">
              From preventive care to advanced smile transformations, Radiance Dentistry offers comprehensive dental solutions using modern technology, personalized treatment plans, and ethical dentistry.
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
      <section className="section technology-section bg-light">
        <div className="container tech-grid">
          <FadeInWhenVisible className="tech-content">
            <h2>Innovation at Your Service</h2>
            <p>We leverage the world's most advanced dental technologies for precise diagnostics and minimally invasive treatments.</p>
            <KnowMoreBtn to="/technology" text="Discover Technology" />
          </FadeInWhenVisible>
          <FadeInWhenVisible className="tech-visuals">
            <div className="tech-card glassmorphism">3D CBCT Scanning</div>
            <div className="tech-card glassmorphism">Digital Impressions</div>
            <div className="tech-card glassmorphism">Laser Dentistry</div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 8. Smile Gallery */}
      <section className="section gallery-section">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>Transformations</h2>
            <p className="max-w-700 mx-auto mb-40">Real results. Life-changing smiles.</p>
          </FadeInWhenVisible>
          <div className="gallery-grid">
            {[1, 2, 3].map((item) => (
              <FadeInWhenVisible key={item} className="gallery-item">
                <div className="before-after-placeholder">Before & After</div>
              </FadeInWhenVisible>
            ))}
          </div>
          <div className="mt-40">
            <KnowMoreBtn to="/gallery" text="View Full Gallery" variant="gold" />
          </div>
        </div>
      </section>

      {/* 9. Patient Testimonials */}
      <section className="section testimonials-section bg-navy text-white">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2 className="text-white">Stories of Radiance</h2>
            <p className="text-light mb-40">What our valued patients have to say.</p>
          </FadeInWhenVisible>
          <div className="testimonial-slider">
            <FadeInWhenVisible className="testimonial-card glassmorphism-dark">
              <Star className="text-gold mb-20" />
              <p className="quote">"An unparalleled dental experience. The attention to detail and luxury atmosphere made me forget I was at the dentist."</p>
              <h4>- Sarah M.</h4>
            </FadeInWhenVisible>
          </div>
          <div className="mt-40">
            <KnowMoreBtn to="/testimonials" text="Read More Reviews" />
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section faq-section bg-light">
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

      {/* 11. Contact */}
      <section className="section contact-section">
        <div className="container contact-box">
          <FadeInWhenVisible className="text-center">
            <h2>Ready for Your Transformation?</h2>
            <p className="max-w-700 mx-auto mb-40">Schedule your exclusive consultation today and take the first step towards your dream smile.</p>
            <div className="contact-actions">
              <KnowMoreBtn to="/contact" text="Book Appointment" variant="gold" />
              <a href="tel:+1234567890" className="btn btn-primary"><Phone size={18} /> Call Us Directly</a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </main>
  );
};

export default Home;
