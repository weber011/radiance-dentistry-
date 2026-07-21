import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, Car, Store, Coffee, ChevronRight, MessageCircle } from 'lucide-react';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import MapEmbed from '../components/ui/MapEmbed';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import './Contact.css';

const Contact = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Radiaance Dentistry",
    "image": "https://radiaancedentistry.com/assets/logo.png",
    "@id": "",
    "url": "https://radiaancedentistry.com",
    "telephone": "+918696781255",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 518, 5th Floor, Western Business Park",
      "addressLocality": "Vesu, Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1418,
      "longitude": 72.7709
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "description": "By Appointment Only"
      }
    ]
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'General Consultation',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Appointment Request* 🦷\n\n`
      + `*Name:* ${formData.name}\n`
      + `*Phone:* ${formData.phone}\n`
      + (formData.email ? `*Email:* ${formData.email}\n` : '')
      + `*Treatment:* ${formData.treatment}\n`
      + (formData.date ? `*Preferred Date:* ${formData.date}\n` : '')
      + (formData.message ? `\n*Message:*\n${formData.message}` : '');
      
    const encodedText = encodeURIComponent(text);
    // Radiaance Dentistry Phone Number
    const whatsappNumber = "918696781255"; 
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    // Optional: Reset form after successful submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: 'General Consultation',
      date: '',
      message: ''
    });
  };

  return (
    <div className="page-container contact-page">
      <Helmet>
        <title>Contact Radiaance Dentistry | Top Dentist in Vesu, Surat</title>
        <meta name="description" content="Book your appointment at Radiaance Dentistry in Vesu, Surat. Contact Dr. Ruchi Jain for world-class dental treatments in a luxury environment." />
        <link rel="canonical" href="https://radiaancedentistry.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Banner */}
      <section className="contact-hero premium-gradient text-white text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">Experience truly premium dental care. We are here to answer your questions and welcome you to our modern facility.</p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <FadeInWhenVisible>
            <div className="full-width-map glassmorphism shadow-md p-10 rounded-3xl bg-white">
              <MapEmbed />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Content Split */}
      <section className="section contact-content-section bg-light">
        <div className="container">
          <div className="contact-split-grid">
            
            {/* Left: Info */}
            <div className="contact-info-column">
              <FadeInWhenVisible>
                <h2 className="text-navy mb-40">Visit Our Clinic</h2>
                
                <div className="info-card glassmorphism mb-30">
                  <div className="info-item">
                    <div className="info-icon"><MapPin size={24} /></div>
                    <div>
                      <h4 className="text-navy mb-10">Clinic Location</h4>
                      <p className="text-secondary m-0">Shop No. 518, 5th Floor,<br />Western Business Park,<br />Vesu, Surat – 395007</p>
                      <a href="https://www.google.com/maps/dir/?api=1&destination=Western+Business+Park,+Vesu,+Surat" target="_blank" rel="noopener noreferrer" className="link-action mt-10 inline-block">
                        <Navigation size={14} className="inline mr-5" /> Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card glassmorphism mb-30">
                  <div className="info-item">
                    <div className="info-icon"><Phone size={24} /></div>
                    <div>
                      <h4 className="text-navy mb-10">Contact Numbers</h4>
                      <p className="text-secondary m-0 mb-10"><a href="tel:8696781255" className="text-secondary hover-gold">8696781255</a></p>
                      <a href="https://wa.me/918696781255" target="_blank" rel="noopener noreferrer" className="link-action inline-block">
                        <MessageCircle size={14} className="inline mr-5" /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card glassmorphism mb-30">
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div>
                      <h4 className="text-navy mb-10">Email Address</h4>
                      <p className="text-secondary m-0 mb-10"><a href="mailto:drruchijain30@gmail.com" className="text-secondary hover-gold">drruchijain30@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="info-card glassmorphism">
                  <div className="info-item">
                    <div className="info-icon"><Clock size={24} /></div>
                    <div>
                      <h4 className="text-navy mb-10">Business Hours</h4>
                      <div className="hours-grid text-secondary">
                        <div>Mon - Sat:</div>
                        <div>10:00 AM – 7:00 PM</div>
                        <div>Sunday:</div>
                        <div>By Appointment Only</div>
                      </div>
                    </div>
                  </div>
                </div>

              </FadeInWhenVisible>
            </div>

            {/* Right: Form */}
            <div className="contact-form-column">
              <FadeInWhenVisible delay={0.2}>
                <div className="appointment-form-card glassmorphism">
                  <h3 className="text-navy mb-10">Request an Appointment</h3>
                  <p className="text-secondary mb-30">Fill out the form below and our team will contact you to confirm your schedule.</p>
                  
                  <form className="appointment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" placeholder="Enter your name" required />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="Your phone number" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address (Optional)</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" placeholder="Your email" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Treatment Interested In</label>
                      <select name="treatment" value={formData.treatment} onChange={handleInputChange} className="form-control">
                        <option>General Consultation</option>
                        <option>Root Canal Treatment</option>
                        <option>Dental Implants</option>
                        <option>Smile Makeover / Veneers</option>
                        <option>Teeth Whitening</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-control" />
                    </div>

                    <div className="form-group">
                      <label>Message / Specific Concerns</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} className="form-control" rows="4" placeholder="Tell us how we can help you..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 justify-center">Submit Request</button>
                  </form>
                </div>
              </FadeInWhenVisible>
            </div>

          </div>
        </div>
      </section>

      {/* Parking & Landmarks */}
      <section className="section landmarks-section text-center">
        <div className="container">
          <FadeInWhenVisible>
            <h2 className="text-navy mb-40">Getting Here</h2>
          </FadeInWhenVisible>
          
          <div className="landmarks-grid">
            <FadeInWhenVisible className="landmark-card glassmorphism shadow-sm">
              <Car size={32} className="text-gold mb-20" />
              <h4 className="text-navy">Parking Information</h4>
              <p className="text-secondary text-sm">Ample basement and visitor parking is available at Western Business Park. Designated spots ensure hassle-free arrivals.</p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.2} className="landmark-card glassmorphism shadow-sm">
              <Store size={32} className="text-gold mb-20" />
              <h4 className="text-navy">Nearby Landmarks</h4>
              <p className="text-secondary text-sm">Located on the prominent Vesu Main Road, opposite SD Jain School, making it easily accessible from all parts of Surat.</p>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.4} className="landmark-card glassmorphism shadow-sm">
              <Coffee size={32} className="text-gold mb-20" />
              <h4 className="text-navy">Waiting Lounge</h4>
              <p className="text-secondary text-sm">Arrive early? Enjoy our premium, climate-controlled waiting lounge designed for maximum comfort before your treatment.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-navy text-white">
        <div className="container">
          <div className="text-center mb-50">
            <FadeInWhenVisible>
              <h2 className="text-white">Frequently Asked Questions</h2>
            </FadeInWhenVisible>
          </div>
          
          <div className="max-w-800 mx-auto">
            <FadeInWhenVisible className="glassmorphism-dark p-30 mb-20 rounded-xl">
              <h4 className="text-gold mb-10">Do you accept walk-in patients?</h4>
              <p className="text-light m-0">While we strongly recommend booking an appointment to ensure zero waiting time, we do accommodate dental emergencies and walk-ins based on availability.</p>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="glassmorphism-dark p-30 mb-20 rounded-xl">
              <h4 className="text-gold mb-10">What payment methods do you accept?</h4>
              <p className="text-light m-0">We accept all major Credit/Debit cards, UPI, Google Pay, Bank Transfers, and Cash.</p>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
