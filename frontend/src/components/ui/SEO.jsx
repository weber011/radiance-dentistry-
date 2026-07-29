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
