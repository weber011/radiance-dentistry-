import React from 'react';
import SEO from '../components/ui/SEO';
import { Award, BookOpen, Heart, Shield, Star, Stethoscope, ChevronRight, GraduationCap } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import ProfessionalCredentialsSection from '../components/ui/ProfessionalCredentialsSection';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Ruchi Jain",
    "jobTitle": "Chief Dental Surgeon",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Government Dental College, Mumbai"
    },
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Radiaance Dentistry"
    },
    "knowsAbout": ["Cosmetic Dentistry", "Smile Designing", "Dental Implants", "Root Canal Treatment", "Laser Dentistry"],
    "sameAs": [
      "https://www.linkedin.com/in/drruchijain"
    ]
  };

  return (
    <main className="doctor-profile-page pt-24">
      <SEO 
        title="Dr. Ruchi Jain | Best Dental Surgeon at Radiaance Dentistry"
        description="Meet Dr. Ruchi Jain, the best dentist in Surat and visionary behind Radiaance Dentistry. Discover her expertise in cosmetic dentistry, smile designing, and comprehensive dental care."
        keywords={["Dr Ruchi Jain", "Dr. Ruchi Jain Dentist", "Dr Ruchi Jain Dental Surgeon", "Best Dentist Dr Ruchi Jain", "Top Dentist in Surat", "Dentist in Vesu", "दांतों का डॉक्टर"]}
        schema={personSchema}
      />

      {/* Hero Section */}
      <section className="profile-hero premium-light-section">
        <div className="container">
          <div className="profile-hero-grid">
            <FadeInWhenVisible className="profile-image-col">
              <div className="profile-image-wrapper luxury-radius">
                <img src="/assets/doctor pic.jpeg" alt="Dr Ruchi Jain treating a patient at Radiaance Dentistry" className="profile-main-img" />
              </div>
              <div className="experience-badge glassmorphism">
                <span className="years text-gold" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>20+</span>
                <span className="label text-white">Years of<br />Excellence</span>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible className="profile-content-col" delay={0.2}>
              <div className="badge-gold mb-15 inline-flex">CHIEF DENTAL SURGEON</div>
              <h1 className="text-navy mb-10 font-playfair" style={{fontSize: '3.5rem'}}>Dr. Ruchi Jain</h1>
              <p className="degree-text text-secondary font-medium text-lg mb-20">BDS (2005) - K.L.E.S institute of dental science Belgaum</p>
              
              <p className="profile-intro text-body text-lg mb-30">
                With over two decades of clinical experience, Dr. Ruchi Jain is the visionary behind Radiaance Dentistry. She combines advanced dental technology with a gentle, compassionate touch to deliver flawless aesthetic and functional results.
              </p>

              <div className="expertise-tags mb-40">
                <span className="premium-chip">Smile Designing</span>
                <span className="premium-chip">Dental Implants</span>
                <span className="premium-chip">Root Canal Therapy</span>
                <span className="premium-chip">Cosmetic Dentistry</span>
                <span className="premium-chip">Preventive Care</span>
              </div>

              <div className="profile-actions flex gap-4 mt-8">
                <KnowMoreBtn to="/contact" text="Book Appointment" variant="primary" />
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-outline-navy flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all" style={{ textDecoration: 'none' }}>
                  Consult on WhatsApp
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-white" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <FadeInWhenVisible>
            <div className="philosophy-card luxury-radius p-10 flex flex-col md:flex-row items-center gap-10" style={{ background: 'linear-gradient(135deg, var(--bg-alt) 0%, #FFFFFF 100%)', border: '1px solid rgba(30,94,255,0.05)', padding: '50px' }}>
              <div className="philosophy-icon text-gold">
                <Heart size={64} strokeWidth={1.5} />
              </div>
              <div className="philosophy-text-content">
                <h3 className="text-navy font-playfair mb-15" style={{fontSize: '2rem'}}>
                  "My philosophy is simple: Treat every patient like family."
                </h3>
                <p className="text-secondary text-lg m-0" style={{lineHeight: 1.8}}>
                  We focus on ethical, pain-free dentistry tailored to your unique needs, ensuring you leave our sanctuary with a confident, radiant smile. Every treatment plan is designed with longevity, function, and aesthetics in mind.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Journey & Qualifications */}
      <section className="section bg-light-blue" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="section-header text-center mb-50">
            <h4 className="section-subtitle">PROFESSIONAL JOURNEY</h4>
            <h2 className="text-navy font-playfair" style={{fontSize: '3rem'}}>Education & Credentials</h2>
          </div>

          <div className="qualifications-grid">
            <FadeInWhenVisible className="qual-card bg-white premium-hover luxury-radius" style={{padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)'}}>
              <GraduationCap className="text-gold mb-20" size={40} strokeWidth={1.5} />
              <h4 className="text-navy mb-4">Educational Background</h4>
              <p className="text-secondary mt-10">
                Graduated with a Bachelor of Dental Surgery (BDS) in 2005 from the prestigious K.L.E.S institute of dental science Belgaum, establishing a strong foundation in modern dental sciences.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2} className="qual-card bg-white premium-hover luxury-radius" style={{padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)'}}>
              <Award className="text-gold mb-20" size={40} strokeWidth={1.5} />
              <h4 className="text-navy mb-4">Clinical Excellence</h4>
              <p className="text-secondary mt-10">
                Consistently updating skills through international workshops and continuous medical education, focusing on advanced cosmetic and implant dentistry.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4} className="qual-card bg-white premium-hover luxury-radius" style={{padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)'}}>
              <Shield className="text-gold mb-20" size={40} strokeWidth={1.5} />
              <h4 className="text-navy mb-4">Patient-Centric Approach</h4>
              <p className="text-secondary mt-10">
                Pioneered the 'Zero-Wait Policy' and 'Anxiety-Free Dentistry' at Radiaance, prioritizing patient comfort and impeccable clinical hygiene.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <ProfessionalCredentialsSection hideProfileBtn={true} />
      
    </main>
  );
};

export default DoctorProfile;
