import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Phone, Calendar, MessageCircle, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { treatmentsData } from '../../data/treatments';

const imageMapping = {
  "dental-implants": "dental_implants.png",
  "root-canal-treatment": "root_canal.png",
  "smile-designing": "smile_designing.png",
  "teeth-whitening": "teeth_whitening.png",
  "dental-veneers": "dental_veneers.png",
  "dental-crowns": "dental_crowns.png",
  "dental-bridges": "dental_bridges.png",
  "braces-orthodontics": "braces_orthodontics.png",
  "clear-aligners": "clear_aligners.png",
  "pediatric-dentistry": "pediatric_dentistry.png",
  "wisdom-tooth-removal": "wisdom_tooth_removal.png",
  "tooth-extraction": "tooth extractionj.png",
  "dental-cleaning": "dental cleaning.png",
  "gum-treatment": "gum treatment.png",
  "smile-makeover": "smile makover.png",
  "full-mouth-rehabilitation": "full mouth rehabilation.png",
  "family-dentistry": "family dentistry.png",
  "emergency-dental-care": "emergency dental care.png",
  "oral-surgery": "oral surgery.png"
};

const FadeInWhenVisible = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServiceLayout = ({ treatment, heroImage }) => {
  const navigate = useNavigate();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": treatment.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    })) || []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Radiance Dentistry",
    "image": "https://www.radiancedentistry.com/assets/logo.png",
    "@id": "https://www.radiancedentistry.com",
    "url": "https://www.radiancedentistry.com",
    "telephone": "+918800201089",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India"
    }
  };

  const medicalSpecialtySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    "name": treatment.name,
    "description": treatment.whatIsIt
  };

  return (
    <div className="treatment-detail-page">
      <Helmet>
        <title>{treatment.name} | Comprehensive Dental Services | Radiance Dentistry</title>
        <meta name="description" content={treatment.shortIntro} />
        <link rel="canonical" href={`https://www.radiancedentistry.com/treatments/${treatment.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalSpecialtySchema)}</script>
      </Helmet>

      {/* 1. Hero Banner */}
      <section className="td-hero">
        <div className="td-hero-bg" style={{ backgroundImage: `url('/assets/${heroImage}')` }}></div>
        <div className="td-hero-overlay"></div>
        <div className="container td-hero-content">
          <div className="td-top-actions">
            <button onClick={() => navigate(-1)} className="td-back-btn">
              <ArrowLeft size={16} /> Back
            </button>
          </div>
          <div className="td-breadcrumbs">
            <Link to="/">Home</Link> <ChevronRight size={14} /> <span>Services</span> <ChevronRight size={14} /> <span className="active">{treatment.name}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {treatment.name}
          </motion.h1>
          <motion.p 
            className="td-hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {treatment.shortIntro}
          </motion.p>
          <motion.div 
            className="td-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact" className="td-btn-primary">
              <Calendar size={18} /> Book Appointment
            </Link>
            <a href="tel:+918800201089" className="td-btn-outline">
              <Phone size={18} /> Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. What is this service? */}
      <section className="td-section bg-white">
        <div className="container">
          <FadeInWhenVisible className="td-what-is">
            <div className="td-what-content">
              <h2>What is {treatment.name}?</h2>
              <p>{treatment.whatIsIt}</p>
            </div>
            <div className="td-what-img-wrapper">
               <img src={`/assets/${heroImage}`} alt={treatment.name} className="td-main-img" />
               <div className="td-img-decoration"></div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* 3. Dynamic Service Sections (e.g. Children, Adults, Emergency Types) */}
      {treatment.serviceSections && treatment.serviceSections.map((section, idx) => (
        <section key={idx} className={`td-section ${idx % 2 === 0 ? 'bg-light' : 'bg-white'}`}>
          <div className="container">
            <FadeInWhenVisible className="text-center mb-40">
              <h2>{section.title}</h2>
              {section.subtitle && <p className="max-w-700 mx-auto">{section.subtitle}</p>}
            </FadeInWhenVisible>
            
            {section.items && (
              <div className="td-cards-grid-3">
                {section.items.map((item, i) => (
                  <FadeInWhenVisible key={i} delay={i * 0.1} className="td-who-card">
                    <div className="td-who-icon"><Shield size={24} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </FadeInWhenVisible>
                ))}
              </div>
            )}
            
            {section.listItems && (
              <ul className="td-symptoms-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {section.listItems.map((li, i) => (
                  <li key={i}><CheckCircle2 className="text-gold" size={20} /> <span>{li}</span></li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* 4. Why Choose Us / Benefits */}
      {treatment.benefits && treatment.benefits.length > 0 && (
        <section className="td-section bg-navy text-white">
          <div className="container">
            <FadeInWhenVisible className="text-center mb-40">
              <h2 className="text-white">Why Choose Radiance Dentistry?</h2>
              <p className="max-w-700 mx-auto text-light">Experience life-changing results with our premium dental care.</p>
            </FadeInWhenVisible>
            <div className="td-cards-grid-2">
              {treatment.benefits.map((benefit, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.1} className="td-benefit-card">
                  <div className="td-benefit-icon"><Sparkles size={24} className="text-gold" /></div>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQs */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="td-section bg-white">
          <div className="container">
            <FadeInWhenVisible className="text-center mb-40">
              <h2>Frequently Asked Questions</h2>
              <p className="max-w-700 mx-auto">Everything you need to know about {treatment.name.toLowerCase()}.</p>
            </FadeInWhenVisible>
            <div className="td-faq-grid">
              {treatment.faqs.map((faq, idx) => (
                <FadeInWhenVisible key={idx} delay={idx * 0.05} className="td-faq-card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Treatments */}
      {treatment.related && treatment.related.length > 0 && (
        <section className="td-section bg-light">
          <div className="container">
            <FadeInWhenVisible className="text-center mb-40">
              <h2>Related Services</h2>
            </FadeInWhenVisible>
            <div className="td-related-grid">
              {treatment.related.map((relatedSlug, idx) => {
                const relatedItem = treatmentsData[relatedSlug];
                if(!relatedItem) return null;
                const relatedImage = imageMapping[relatedSlug] || "treatment_placeholder.png";
                return (
                  <FadeInWhenVisible key={idx} delay={idx * 0.1} className="td-related-card">
                    <div className="td-related-img">
                      <img src={`/assets/${relatedImage}`} alt={relatedItem.name} />
                    </div>
                    <div className="td-related-content">
                      <h4>{relatedItem.name}</h4>
                      <Link to={`/treatments/${relatedItem.slug}`} className="td-link-gold">
                        Explore <ChevronRight size={16} />
                      </Link>
                    </div>
                  </FadeInWhenVisible>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Final CTA */}
      <section className="td-cta-section">
        <div className="container text-center">
          <FadeInWhenVisible>
            <h2>Ready to Transform Your Smile?</h2>
            <p className="max-w-700 mx-auto mb-40">Schedule your consultation today and take the first step towards exceptional oral health.</p>
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

export default ServiceLayout;
