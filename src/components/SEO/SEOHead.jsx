import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  structuredData,
  canonical,
  noindex = false
}) => {
  const defaultTitle = "Emerson Espinoza - Senior Software Engineer | Tech Lead | Consultor IA & ML";
  const defaultDescription = "Senior Software Engineer peruano 🇵🇪 con residencia en Chile 🇨🇱. 6+ años transformando ideas en soluciones tecnológicas escalables. Especialista en IA/ML, Python, React, arquitecturas enterprise.";
  const defaultImage = "https://emersonespinoza.com/assets/emerson-espinoza-social-card.jpg";
  const defaultKeywords = "Emerson Espinoza, Senior Software Engineer, Tech Lead, CTO, Python Developer, React Developer, Machine Learning Engineer, AI Specialist, Santiago Chile";

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url || "https://emersonespinoza.com/";
  const seoKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:secure_url" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Emerson Espinoza Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
      <meta property="twitter:creator" content="@emersonxinay" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;