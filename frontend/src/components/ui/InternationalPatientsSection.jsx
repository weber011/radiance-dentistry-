import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Calendar, Stethoscope, Heart, MessageCircle, Monitor, CalendarCheck, FileText, CheckCircle2 } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import KnowMoreBtn from './KnowMoreBtn';
import './InternationalPatientsSection.css';

const journeySteps = [
  {
    icon: <MessageCircle />,
    title: 'Online Consultation',
    desc: 'Video consultation before your visit to discuss concerns.'
  },
  {
    icon: <FileText />,
    title: 'Treatment Planning',
    desc: 'Receive a personalized treatment plan and estimated timeline.'
  },
  {
    icon: <Calendar />,
    title: 'Travel Guidance',
    desc: 'Support for scheduling appointments according to your travel dates.'
  },
  {
    icon: <Stethoscope />,
    title: 'Treatment',
    desc: 'Comfortable, technology-driven dental care.'
  },
  {
    icon: <Heart />,
    title: 'Recovery & Follow-Up',
    desc: 'Guidance after treatment and remote follow-up support.'
  }
];

const features = [
  { icon: <Monitor />, title: 'International Consultation' },
  { icon: <CalendarCheck />, title: 'Flexible Scheduling' },
  { icon: <FileText />, title: 'Digital Treatment Planning' },
  { icon: <CheckCircle2 />, title: 'Advanced Technology' },
  { icon: <Heart />, title: 'Comfortable Patient Experience' },
  { icon: <MessageCircle />, title: 'Long-Term Follow-Up' }
];

const InternationalPatientsSection = () => {
  return (
    <section className="section intl-section bg-white">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-50">
          <FadeInWhenVisible>
            <div className="badge-gold mb-15 mx-auto">INTERNATIONAL PATIENTS</div>
            <h2 className="text-navy">World-Class Dental Care, Personalized for International Patients</h2>
            <p className="max-w-700 mx-auto text-secondary">
              From your first online consultation to your final follow-up, our team ensures a smooth and comfortable treatment experience.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* Journey Layout */}
        <div className="intl-journey-grid mb-60">
          <FadeInWhenVisible className="intl-image-col">
            <div className="intl-image-wrapper luxury-radius">
              <img src="/assets/reception.jpeg" alt="Radiance Dentistry Clinic Reception" className="intl-img" loading="lazy" />
              <div className="intl-image-overlay glassmorphism">
                <Plane className="icon-gold mb-10" size={32} />
                <h4 className="text-white m-0">Your Destination for Premium Dental Care</h4>
              </div>
            </div>
          </FadeInWhenVisible>
          
          <div className="intl-timeline-col">
            {journeySteps.map((step, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1} className="timeline-step">
                <div className="timeline-icon glassmorphism">
                  {step.icon}
                </div>
                <div className="timeline-content">
                  <h4>Step {idx + 1}: {step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {idx < journeySteps.length - 1 && <div className="timeline-connector"></div>}
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="intl-features-grid mb-50">
          {features.map((feature, idx) => (
            <FadeInWhenVisible key={idx} className="intl-feature-card premium-hover glassmorphism-subtle">
              <div className="feature-icon text-gold mb-15">{feature.icon}</div>
              <h4 className="m-0 text-navy font-medium text-center">{feature.title}</h4>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center flex-center gap-20 intl-actions">
          <KnowMoreBtn to="/contact" text="Schedule Online Consultation" variant="primary" />
          <Link to="/international-patients" className="btn-outline">
            Contact International Desk &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InternationalPatientsSection;
