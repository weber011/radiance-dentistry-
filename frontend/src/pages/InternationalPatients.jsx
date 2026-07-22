import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Plane, Calendar, Stethoscope, Heart, MessageCircle, Monitor, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import './InternationalPatients.css';

const InternationalPatients = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need to travel for multiple visits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on the treatment, we try to optimize your schedule to minimize travel. Our online consultation helps us plan effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide a cost estimate before I travel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, after a detailed online consultation and reviewing your digital records, we will provide a comprehensive treatment plan with an estimated cost and timeline."
        }
      }
    ]
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Radiance Dentistry",
    "description": "World-class luxury dental care tailored for international patients.",
    "url": "https://radiaancedentistry.com",
    "image": "https://radiaancedentistry.com/assets/logo.png"
  };

  return (
    <div className="intl-page">
      <Helmet>
        <title>International Patients | Radiance Dentistry</title>
        <meta name="description" content="Experience world-class dental care at Radiance Dentistry. We provide personalized treatment plans and a smooth journey for patients travelling from abroad." />
        <link rel="canonical" href="https://radiaancedentistry.com/international-patients" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(medicalSchema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <section className="intl-hero bg-dark">
        <div className="container text-center">
          <FadeInWhenVisible>
            <div className="badge-gold mb-20 mx-auto">INTERNATIONAL DESK</div>
            <h1 className="text-white">World-Class Dental Care,<br/>Anywhere You Call Home</h1>
            <p className="hero-subtitle max-w-800 mx-auto text-gray-300">
              Welcome to Radiance Dentistry. We combine clinical excellence, advanced technology, and a luxurious patient experience to provide seamless dental care for our international visitors.
            </p>
            <div className="mt-40">
              <KnowMoreBtn to="/contact" text="Schedule Online Consultation" variant="gold" />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Why Choose Radiance */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <FadeInWhenVisible>
              <h2 className="text-navy">Why Choose Radiance Dentistry?</h2>
              <p className="max-w-700 mx-auto text-secondary">A destination for precision, comfort, and exceptional results.</p>
            </FadeInWhenVisible>
          </div>

          <div className="premium-trust-grid">
            <FadeInWhenVisible className="premium-trust-card glassmorphism">
              <div className="trust-icon-wrapper"><Monitor /></div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art diagnostic and treatment equipment for faster, safer procedures.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="premium-trust-card glassmorphism">
              <div className="trust-icon-wrapper"><Shield /></div>
              <h3>Strict Sterilization</h3>
              <p>Uncompromising international safety and hygiene protocols.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="premium-trust-card glassmorphism">
              <div className="trust-icon-wrapper"><Sparkles /></div>
              <h3>Luxury Experience</h3>
              <p>A serene, comfortable environment designed to reduce dental anxiety.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-60">
            <FadeInWhenVisible>
              <div className="badge-gold mb-15 mx-auto">YOUR JOURNEY</div>
              <h2 className="text-navy">A Seamless Patient Experience</h2>
              <p className="max-w-700 mx-auto text-secondary">We understand that traveling for healthcare can be overwhelming. Our structured 5-step journey ensures everything is organized before you even board your flight.</p>
            </FadeInWhenVisible>
          </div>

          <div className="journey-vertical-timeline">
            {[
              { title: 'Online Consultation', icon: <MessageCircle />, desc: 'We begin with a comprehensive video consultation to understand your concerns and discuss potential solutions.' },
              { title: 'Digital Treatment Planning', icon: <Monitor />, desc: 'Our team will review your records and provide a transparent, personalized treatment plan including estimated timelines.' },
              { title: 'Travel Guidance', icon: <Plane />, desc: 'We offer support in scheduling your dental appointments efficiently around your travel dates to optimize your stay.' },
              { title: 'Clinical Treatment', icon: <Stethoscope />, desc: 'Experience pain-free, technology-driven dental care in our luxurious, highly sterile clinic.' },
              { title: 'Recovery & Remote Follow-Up', icon: <Heart />, desc: 'After you return home, our team provides continuous remote support and guidance to ensure optimal healing.' }
            ].map((step, idx) => (
              <FadeInWhenVisible key={idx} className="journey-vertical-step">
                <div className="journey-step-number">{idx + 1}</div>
                <div className="journey-step-content glassmorphism-subtle">
                  <div className="step-icon text-gold mb-15">{step.icon}</div>
                  <h3 className="text-navy mb-10">{step.title}</h3>
                  <p className="text-secondary m-0">{step.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning */}
      <section className="section bg-navy text-white">
        <div className="container">
          <div className="travel-planning-grid">
            <FadeInWhenVisible className="travel-content">
              <h2 className="text-white mb-20">Travel Planning &amp; Assistance</h2>
              <p className="text-light mb-30">Our dedicated International Desk is here to provide guidance and ensure your dental trip to India is as smooth as possible.</p>
              
              <ul className="feature-list light mb-40">
                <li><CheckCircle2 className="text-gold" /> Appointment scheduling optimized for your stay</li>
                <li><CheckCircle2 className="text-gold" /> Transparent timeline estimation</li>
                <li><CheckCircle2 className="text-gold" /> Post-treatment recovery guidelines</li>
              </ul>
              
              <KnowMoreBtn to="/contact" text="Contact International Desk" variant="gold" />
            </FadeInWhenVisible>
            <FadeInWhenVisible className="travel-image-col">
              <div className="travel-image-wrapper luxury-radius">
                <img src="/assets/reception.jpeg" alt="Clinic Reception" className="travel-img" loading="lazy" />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light faq-section">
        <div className="container faq-grid">
          <FadeInWhenVisible>
            <h2>International Patient FAQs</h2>
            <p>Common questions from our patients travelling from abroad.</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible className="faq-list">
            <div className="faq-item">
              <h3 className="text-navy mb-10">Do I need to travel for multiple visits?</h3>
              <p className="text-secondary text-sm m-0">Depending on the treatment, we try to optimize your schedule to minimize travel. Our online consultation helps us plan effectively.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-navy mb-10">Can you provide a cost estimate before I travel?</h3>
              <p className="text-secondary text-sm m-0">Yes, after a detailed online consultation and reviewing your digital records, we will provide a comprehensive treatment plan with an estimated cost and timeline.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-navy mb-10">How do I start the process?</h3>
              <p className="text-secondary text-sm m-0">Simply click "Schedule Online Consultation" or contact us via email. Our team will guide you through the next steps.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default InternationalPatients;
