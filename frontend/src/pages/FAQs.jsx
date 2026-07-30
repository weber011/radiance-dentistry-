import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import KnowMoreBtn from '../components/ui/KnowMoreBtn';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQs.css';

const faqsList = [
  {
    question: "Who is the best dentist in Surat?",
    answer: "Dr. Ruchi Jain at Radiaance Dentistry is widely regarded as one of the best dentists in Surat. With over two decades of experience, she offers pain-free, advanced dental care ranging from root canals to full smile makeovers."
  },
  {
    question: "Which is the best dental clinic near me in Vesu?",
    answer: "Radiaance Dentistry is a premium, luxury dental clinic located near Vesu, Surat. We provide personalized, evidence-based dentistry with the most modern dental equipment."
  },
  {
    question: "Where can I get a painless root canal in Surat?",
    answer: "Radiaance Dentistry specializes in painless root canal treatments. Dr. Ruchi Jain uses advanced digital dentistry and laser technology to ensure comfortable treatment and preserve your natural tooth."
  },
  {
    question: "How to choose the best dentist in Surat?",
    answer: "Look for a clinic with advanced dental technology, strict sterilization protocols, patient-first care, and an experienced dentist. Radiaance Dentistry fulfills all these criteria, offering comprehensive family dentistry."
  },
  {
    question: "Who is the best implant dentist in Surat?",
    answer: "For single tooth implants, multiple dental implants, or full mouth implants, Dr. Ruchi Jain at Radiaance Dentistry provides expert implant placement using high-quality materials for lasting missing teeth solutions."
  },
  {
    question: "How much does a dental implant cost in Surat?",
    answer: "The cost of a dental implant in Surat varies based on the type of implant and complexity of the case. At Radiaance Dentistry, we offer affordable, high-quality dental implants with transparent pricing. Schedule a consultation for a precise quote."
  },
  {
    question: "What are the signs you need a root canal?",
    answer: "Severe tooth pain, sensitivity to hot and cold, swollen gums, or a darkened tooth are common signs. Visit our emergency dentist at Radiaance Dentistry for immediate relief and root canal assessment."
  },
  {
    question: "How often should you get your teeth cleaned?",
    answer: "It is recommended to get professional dental cleaning (scaling and polishing) every 6 months to maintain healthy gums and prevent cavities."
  },
  {
    question: "What are the benefits of smile designing?",
    answer: "Smile designing (or smile makeover) enhances your confidence by fixing crooked, stained, or chipped teeth using dental veneers, clear aligners, and teeth whitening. It gives you a perfect, Hollywood smile tailored to your face."
  },
  {
    question: "Dental implant vs bridge: Which is better?",
    answer: "A dental implant is generally better as it replaces the tooth root, preventing bone loss and doesn't require grinding down adjacent healthy teeth like a bridge does. However, both are excellent missing teeth solutions."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="faqs-page pt-120 pb-80 bg-light-blue">
      <SEO 
        title="Frequently Asked Questions | Radiaance Dentistry Surat"
        description="Find answers to common dental queries: Who is the best dentist in Surat? How much do implants cost? Where to get a root canal? Learn more at Radiaance Dentistry."
        keywords={[
          "Who is the best dentist in Surat", "Best dental clinic near me", "Where can I get root canal in Surat",
          "Best smile makeover clinic in Surat", "Best dentist for teeth whitening", "Best implant dentist in Surat",
          "Best pediatric dentist near me", "Emergency dentist near me", "Affordable dentist near me", "Best cosmetic dentist near me",
          "How to choose the best dentist in Surat", "How much does a dental implant cost in Surat", "Signs you need a root canal"
        ]}
        schema={faqSchema}
      />
      
      <div className="container">
        <div className="text-center mb-50">
          <FadeInWhenVisible>
            <div className="badge-gold mb-15">DENTAL FAQs</div>
            <h2>Common Dental Questions Answered</h2>
            <p className="max-w-700 mx-auto text-secondary mt-15">
              Have questions about your dental health or our treatments? Here are answers to the most common queries we receive at Radiaance Dentistry.
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="faq-accordion max-w-800 mx-auto">
          {faqsList.map((faq, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div 
                className={`faq-item glassmorphism mb-15 ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question flex-between cursor-pointer p-20">
                  <h4 className="m-0 text-navy">{faq.question}</h4>
                  {openIndex === index ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-navy" />}
                </div>
                {openIndex === index && (
                  <div className="faq-answer p-20 pt-0">
                    <p className="m-0 text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible className="text-center mt-50">
          <h3>Still have questions?</h3>
          <p className="mb-20">Schedule a dental consultation with Dr. Ruchi Jain.</p>
          <KnowMoreBtn to="/contact" text="Consult Dentist Today" variant="primary" />
        </FadeInWhenVisible>
      </div>
    </main>
  );
};

export default FAQs;
