import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ZoomIn, ChevronRight, BookOpen, Stethoscope, Microscope, Award, ArrowRight } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import ImageLightbox from './ImageLightbox';
import KnowMoreBtn from './KnowMoreBtn';
import './ProfessionalCredentialsSection.css';

const certificates = [
  {
    id: "c3",
    src: "/assets/c3.jpeg",
    title: "Certificate of Merit - MDS (Endodontics)",
    institution: "K.L.E.E.'s Institute of Dental Science",
    year: "2003-04",
    desc: "Awarded for 2nd Position in the Endo-Poster division."
  },
  {
    id: "c2",
    src: "/assets/c2.jpeg",
    title: "Level 1 Workshop on Endodontics",
    institution: "DENTSPLY Academy",
    year: "",
    desc: "Advanced Training at PDIC's Center for Endodontics."
  },
  {
    id: "c1",
    src: "/assets/c1.jpeg",
    title: "Certificate of Appreciation",
    institution: "SM Art & CAADS",
    year: "2023",
    desc: "For contributing to free health check-up camps."
  }
];

const ProfessionalCredentialsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. Ruchi Jain",
    "jobTitle": "Chief Dental Surgeon",
    "image": "https://radiaancedentistry.com/assets/doctor%20pic.jpeg",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Radiance Dentistry"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "K.L.E.E.'s Institute of Dental Science"
    }
  };

  return (
    <section className="section credentials-section bg-light">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
      
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-50">
          <FadeInWhenVisible>
            <div className="badge-gold mb-15 mx-auto">PROFESSIONAL CREDENTIALS</div>
            <h2 className="text-navy">Trusted Qualifications. Proven Expertise.</h2>
            <p className="max-w-700 mx-auto text-secondary">
              Every treatment is backed by professional education, recognized qualifications, and a commitment to continuous learning.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Credentials Layout */}
        <div className="credentials-layout-grid mb-60">
          
          {/* Left: Featured Certificate */}
          <FadeInWhenVisible className="featured-cert-col">
            <div 
              className="featured-cert-wrapper premium-hover"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(0)}
            >
              <div className="featured-cert-image">
                <img src={certificates[0].src} alt={certificates[0].title} loading="lazy" />
                <div className="zoom-overlay">
                  <ZoomIn size={40} className="text-white" />
                </div>
              </div>
              <div className="featured-cert-info glassmorphism">
                <h3 className="m-0 text-navy">{certificates[0].title}</h3>
                <p className="text-gold font-medium mt-5 m-0">{certificates[0].institution}</p>
                <p className="text-secondary text-sm mt-5 m-0">{certificates[0].year} • {certificates[0].desc}</p>
                <div className="click-to-enlarge mt-10 text-xs">Click to enlarge <ArrowRight size={12}/></div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right: Credentials Timeline */}
          <FadeInWhenVisible className="credentials-timeline-col" delay={0.2}>
            
            <div className="credential-timeline-item">
              <div className="timeline-node"><Award size={20} className="text-white" /></div>
              <div className="timeline-card glassmorphism-subtle premium-hover" onClick={() => openLightbox(0)}>
                <div className="cert-preview"><img src={certificates[0].src} alt="MDS" /></div>
                <div className="cert-details">
                  <h4 className="text-navy m-0">{certificates[0].title}</h4>
                  <p className="text-secondary text-sm m-0 mt-5">{certificates[0].institution}</p>
                  <p className="text-gold text-xs font-medium mt-5 m-0">Year: {certificates[0].year}</p>
                  <span className="view-cert-link mt-10 text-xs text-navy font-medium flex items-center gap-1">View Certificate <ChevronRight size={14}/></span>
                </div>
              </div>
            </div>

            <div className="timeline-vertical-line"></div>

            <div className="credential-timeline-item">
              <div className="timeline-node"><BookOpen size={20} className="text-white" /></div>
              <div className="timeline-card glassmorphism-subtle premium-hover" onClick={() => openLightbox(1)}>
                <div className="cert-preview"><img src={certificates[1].src} alt="Endodontics Workshop" /></div>
                <div className="cert-details">
                  <h4 className="text-navy m-0">{certificates[1].title}</h4>
                  <p className="text-secondary text-sm m-0 mt-5">{certificates[1].institution}</p>
                  <span className="view-cert-link mt-10 text-xs text-navy font-medium flex items-center gap-1">View Certificate <ChevronRight size={14}/></span>
                </div>
              </div>
            </div>

            <div className="timeline-vertical-line"></div>

            <div className="credential-timeline-item">
              <div className="timeline-node"><Stethoscope size={20} className="text-white" /></div>
              <div className="timeline-card glassmorphism-subtle premium-hover" onClick={() => openLightbox(2)}>
                <div className="cert-preview"><img src={certificates[2].src} alt="Appreciation" /></div>
                <div className="cert-details">
                  <h4 className="text-navy m-0">{certificates[2].title}</h4>
                  <p className="text-secondary text-sm m-0 mt-5">{certificates[2].institution}</p>
                  <p className="text-gold text-xs font-medium mt-5 m-0">Year: {certificates[2].year}</p>
                  <span className="view-cert-link mt-10 text-xs text-navy font-medium flex items-center gap-1">View Certificate <ChevronRight size={14}/></span>
                </div>
              </div>
            </div>

          </FadeInWhenVisible>
        </div>

        {/* Professional Values */}
        <div className="professional-values-grid mb-50">
          {[
            { icon: <Microscope />, title: "Evidence-Based Dentistry" },
            { icon: <Stethoscope />, title: "Personalized Patient Care" },
            { icon: <BookOpen />, title: "Modern Clinical Techniques" },
            { icon: <Award />, title: "Continuous Learning" }
          ].map((val, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.1} className="professional-value-card glassmorphism">
              <div className="value-icon mb-15">{val.icon}</div>
              <h4 className="text-navy m-0 text-center">{val.title}</h4>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center flex-center gap-20">
          <KnowMoreBtn to="/doctor/dr-ruchi-jain" text="Meet Dr. Ruchi Jain &rarr;" variant="outline" className="btn-outline-navy" />
          <KnowMoreBtn to="/contact" text="Book Appointment &rarr;" variant="primary" />
        </div>

      </div>

      {/* Lightbox for Certificates */}
      <ImageLightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={certificates[lightboxIndex]?.src}
        altText={certificates[lightboxIndex]?.title}
      />
    </section>
  );
};

export default ProfessionalCredentialsSection;
