import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  schema 
}) => {
  const defaultTitle = "Radiance Dentistry | Best Dental Clinic in Surat";
  const defaultDescription = "Radiance Dentistry is the best dental clinic in Vesu, Surat. Dr. Ruchi Jain offers advanced dental care, implants, root canals, and smile makeovers.";
  const defaultKeywords = "Radiance Dentistry, Best Dentist in Surat, Top Dental Clinic in Vesu, Dr Ruchi Jain, Dental Clinic Surat";

  const seoTitle = title ? `${title} | Radiance Dentistry` : defaultTitle;
  const seoDescription = description || defaultDescription;
  
  // Combine custom keywords with defaults if needed, or just use custom
  let keywordString = defaultKeywords;
  if (keywords) {
    if (Array.isArray(keywords)) {
      keywordString = keywords.join(', ');
    } else {
      keywordString = keywords;
    }
  }

  const globalSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    "name": "Radiance Dentistry",
    "image": "https://radiaancedentistry.com/assets/logo.png",
    "url": "https://radiaancedentistry.com",
    "telephone": "+918696781255",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 518, 5th Floor, Western Business Park",
      "addressLocality": "Vesu",
      "addressRegion": "Surat, Gujarat",
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
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/radiance.dentistry",
      "https://www.instagram.com/radiance.dentistry"
    ]
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={keywordString} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Radiance Dentistry" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <script type="application/ld+json">
        {JSON.stringify(globalSchema)}
      </script>

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
