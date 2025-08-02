import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import SEOHead from '../../components/SEO/SEOHead';

const CVHarvard = () => {
  const { t, i18n } = useTranslation(['translation']);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ES' ? 'EN' : 'ES';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const education = [
    {
      degree: t('cv.harvard.education.degree'),
      institution: t('cv.harvard.education.university'),
      location: t('cv.harvard.education.location'),
      year: t('cv.harvard.education.period'),
      honors: t('cv.harvard.education.status')
    },
    {
      degree: t('cv.harvard.education.specialization1'),
      institution: t('cv.harvard.education.institution1'),
      location: t('cv.harvard.education.location1'),
      year: t('cv.harvard.education.period1')
    },
    {
      degree: t('cv.harvard.education.specialization2'),
      institution: t('cv.harvard.education.institution2'),
      location: t('cv.harvard.education.location2'),
      year: t('cv.harvard.education.period2')
    },
    {
      degree: t('cv.harvard.education.continuous'),
      institution: t('cv.harvard.education.platforms'),
      location: "Online",
      year: t('cv.harvard.education.always')
    }
  ];

  const projects = [
    {
      title: t('cv.harvard.projects.hazuki_title'),
      description: t('cv.harvard.projects.hazuki_description'),
      year: t('cv.harvard.projects.hazuki_year'),
      tech: t('cv.harvard.projects.hazuki_tech')
    },
    {
      title: t('cv.harvard.projects.compilando_title'),
      description: t('cv.harvard.projects.compilando_description'),
      year: t('cv.harvard.projects.compilando_year'),
      tech: t('cv.harvard.projects.compilando_tech')
    }
  ];

  const certifications = [
    {
      title: t('cv.harvard.certifications.fullstack'),
      organization: t('cv.harvard.certifications.fullstack_org'),
      year: t('cv.harvard.certifications.fullstack_year')
    },
    {
      title: t('cv.harvard.certifications.python'),
      organization: t('cv.harvard.certifications.python_org'),
      year: t('cv.harvard.certifications.python_year')
    },
    {
      title: t('cv.harvard.certifications.docker'),
      organization: t('cv.harvard.certifications.docker_org'),
      year: t('cv.harvard.certifications.docker_year')
    }
  ];

  const achievements = [
    {
      title: t('cv.harvard.achievements.performance_title'),
      description: t('cv.harvard.achievements.performance_description'),
      period: t('cv.harvard.achievements.performance_period'),
      impact: t('cv.harvard.achievements.performance_impact')
    },
    {
      title: t('cv.harvard.achievements.platform_title'),
      description: t('cv.harvard.achievements.platform_description'),
      period: t('cv.harvard.achievements.platform_period'),
      impact: t('cv.harvard.achievements.platform_impact')
    }
  ];

  const downloadPDF = async () => {
    const element = document.getElementById('cv-content');

    // Asegurar que las animaciones estén completas
    await new Promise(resolve => setTimeout(resolve, 1000));

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      height: element.scrollHeight,
      windowHeight: element.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm  
    const margin = 10; // margin in mm
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = margin;
    let heightLeft = imgHeight;

    // Primera página
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= (pageHeight - margin * 2);

    // Páginas adicionales
    while (heightLeft > 0) {
      position = -(imgHeight - heightLeft) + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= (pageHeight - margin * 2);
    }

    const fileName = currentLanguage === 'ES'
      ? 'Emerson_Espinoza_CV_Harvard_ES.pdf'
      : 'Emerson_Espinoza_CV_Harvard_EN.pdf';

    pdf.save(fileName);
  };

  const harvardStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "Resume"],
    "name": "Emerson Espinoza Aguirre",
    "jobTitle": "Senior Software Engineer & Tech Lead", 
    "description": "CV académico estilo Harvard de Emerson Espinoza, Senior Software Engineer con 6+ años de experiencia liderando proyectos tecnológicos",
    "url": "https://emersonespinoza.com/cv/harvard",
    "image": "https://emersonespinoza.com/assets/emerson-espinoza-5579c795.jpeg",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad Nacional Hermilio Valdizán"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Ingeniero de Sistemas",
        "educationalLevel": "Bachelor's Degree"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Full Stack Web Development",
        "credentialCategory": "Professional Certification"
      }
    ],
    "workExperience": [
      {
        "@type": "WorkExperience",
        "jobTitle": "Founder & Chief Technology Officer",
        "employer": {
          "@type": "Organization",
          "name": "CompilandoCode"
        },
        "startDate": "2022-02",
        "responsibilities": "Fundé empresa tecnología educativa sirviendo 500+ estudiantes en Latinoamérica"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <SEOHead 
        title={currentLanguage === 'ES' 
          ? "CV Emerson Espinoza - Ingeniero de Sistemas | Currículum Harvard Style" 
          : "Emerson Espinoza Resume - Systems Engineer | Harvard Style CV"
        }
        description={currentLanguage === 'ES'
          ? "Currículum Vitae académico de Emerson Espinoza, Ingeniero de Sistemas con 6+ años de experiencia. Senior Software Engineer especialista en Python, React, IA/ML. CTO & Tech Lead con historial comprobado en arquitecturas escalables."
          : "Academic Curriculum Vitae of Emerson Espinoza, Systems Engineer with 6+ years of experience. Senior Software Engineer specializing in Python, React, AI/ML. CTO & Tech Lead with proven track record in scalable architectures."
        }
        keywords="Emerson Espinoza CV, Currículum Vitae, Harvard Style Resume, Ingeniero Sistemas, Senior Software Engineer, Python Developer, React Developer, Tech Lead CTO, Machine Learning Engineer, Santiago Chile, CV Download PDF"
        url="https://emersonespinoza.com/cv/harvard"
        canonical="https://emersonespinoza.com/cv/harvard"
        structuredData={harvardStructuredData}
      />
      {/* Mobile-first styles */}
      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; }
        }
        
        /* Mobile-first responsive text */
        .responsive-title { font-size: 1.25rem; }
        .responsive-subtitle { font-size: 0.875rem; }
        .responsive-text { font-size: 0.75rem; }
        
        @media (min-width: 640px) {
          .responsive-title { font-size: 1.5rem; }
          .responsive-subtitle { font-size: 1rem; }
          .responsive-text { font-size: 0.875rem; }
        }
        
        @media (min-width: 768px) {
          .responsive-title { font-size: 2rem; }
          .responsive-subtitle { font-size: 1.125rem; }
          .responsive-text { font-size: 0.9375rem; }
        }
        
        @media (min-width: 1024px) {
          .responsive-title { font-size: 2.5rem; }
          .responsive-subtitle { font-size: 1.25rem; }
          .responsive-text { font-size: 1rem; }
        }
        
        /* PDF optimization - avoid page breaks in content */
        #cv-content {
          page-break-inside: avoid;
        }
        
        #cv-content section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        #cv-content .mb-4, #cv-content .mb-6 {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        /* Enable browser translation */
        #cv-content {
          translate: yes;
        }
        
        #cv-content p, #cv-content h1, #cv-content h2, #cv-content h3, #cv-content li {
          translate: yes;
        }
        
        /* Mobile-first controls */
        .cv-controls {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        
        @media (min-width: 768px) {
          .cv-controls {
            position: fixed;
            top: 16px;
            right: 16px;
            left: auto;
            background: transparent;
            backdrop-filter: none;
            border: none;
            padding: 0;
            flex-direction: column;
            width: auto;
          }
        }
        
        .control-btn {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 44px;
          min-height: 44px;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .control-btn {
            font-size: 14px;
            padding: 10px 16px;
          }
        }
        
        @media (min-width: 768px) {
          .control-btn {
            margin-bottom: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        }
        
        .lang-btn {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }
        
        .lang-btn:hover {
          background: linear-gradient(135deg, #059669, #047857);
          transform: translateY(-1px);
        }
        
        .pdf-btn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
        }
        
        .pdf-btn:hover {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          transform: translateY(-1px);
        }
        
        .cv-title {
          color: white;
          font-weight: 600;
          font-size: 14px;
          margin: 0;
        }
        
        @media (min-width: 768px) {
          .cv-title {
            display: none;
          }
        }
      `}</style>

      {/* Mobile-first Controls */}
      <div className="cv-controls no-print">
        <h1 className="cv-title">CV - {t('cv.harvard.title')}</h1>
        <div className="flex gap-2">
          <button
            onClick={toggleLanguage}
            className="control-btn lang-btn"
            title={currentLanguage === 'ES' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label={currentLanguage === 'ES' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span className="text-xs">🌐</span>
            <span className="hidden xs:inline">{currentLanguage === 'ES' ? 'EN' : 'ES'}</span>
          </button>
          <button
            onClick={downloadPDF}
            className="control-btn pdf-btn"
            aria-label={t('cv.common.download_pdf')}
          >
            <span className="text-xs">📄</span>
            <span className="hidden xs:inline text-xs">PDF</span>
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div id="cv-content" className="bg-white text-black pt-16 md:pt-0 mt-16">
        {/* Header */}
        <motion.header
          className="text-center py-6 md:py-8 border-b-2 border-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="responsive-title font-bold mb-2 md:mb-4">{t('cv.harvard.title')}</h1>
          <p className="responsive-subtitle text-gray-600 mb-4">{t('cv.harvard.subtitle')}</p>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-1 md:space-y-0 text-xs md:text-sm text-gray-700 px-4">
            <span>📧 {t('cv.harvard.email')}</span>
            <span>
              <a href="http://linkedin.com/in/emerson-espinoza-aguirre" target="_blank" rel="noopener noreferrer">
                🌐 {t('cv.harvard.linkedin')}
              </a>
            </span>
            <span>
              <a href="http://github.com/emersonxinay" target="_blank" rel="noopener noreferrer">
                {t('cv.harvard.github')}
              </a>
            </span>
            <span>📍{t('cv.harvard.location')}</span>
          </div>

          {/* Translation note */}
          <div className="mt-3 text-xs text-gray-500 italic px-4">
            {t('cv.common.translate_note')}
          </div>
        </motion.header>

        <div className="max-w-4xl mx-auto p-3 md:p-8">

          {/* Executive Summary */}
          <motion.section
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.summary.title')}</h2>
            <p className="responsive-text text-justify leading-relaxed">
              {t('cv.harvard.summary.content')}
            </p>
          </motion.section>

          {/* Education */}
          <motion.section
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.education.title')}</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-2 md:mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-1 md:mb-0">
                    <h3 className="font-bold responsive-text">{edu.degree}</h3>
                    <p className="italic text-xs md:text-sm">{edu.institution}, {edu.location}</p>
                    {edu.honors && <p className="text-xs text-gray-600">{edu.honors}</p>}
                  </div>
                  <span className="font-semibold text-xs md:text-sm">{edu.year}</span>
                </div>
              </div>
            ))}
          </motion.section>

          {/* Professional Experience */}
          <motion.section
            className="mb-4 md:mb-8 page-break-inside-avoid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.experience.title')}</h2>

            <div className="mb-3 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                <div className="mb-1 md:mb-0">
                  <h3 className="font-bold responsive-text">{t('cv.harvard.experience.cto_title')}</h3>
                  <p className="italic text-xs md:text-sm">{t('cv.harvard.experience.cto_company')}</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">{t('cv.harvard.experience.cto_period')}</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-2 md:ml-4">
                <li>{t('cv.harvard.experience.cto_1')}</li>
                <li>{t('cv.harvard.experience.cto_2')}</li>
                <li>{t('cv.harvard.experience.cto_3')}</li>
                <li>{t('cv.harvard.experience.cto_4')}</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                <div className="mb-1 md:mb-0">
                  <h3 className="font-bold responsive-text">{t('cv.harvard.experience.lead_title')}</h3>
                  <p className="italic text-xs md:text-sm">{t('cv.harvard.experience.lead_company')}</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">{t('cv.harvard.experience.lead_period')}</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-2 md:ml-4">
                <li>{t('cv.harvard.experience.lead_1')}</li>
                <li>{t('cv.harvard.experience.lead_2')}</li>
                <li>{t('cv.harvard.experience.lead_3')}</li>
                <li>{t('cv.harvard.experience.lead_4')}</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                <div className="mb-1 md:mb-0">
                  <h3 className="font-bold responsive-text">{t('cv.harvard.experience.senior_title')}</h3>
                  <p className="italic text-xs md:text-sm">{t('cv.harvard.experience.senior_company')}</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">{t('cv.harvard.experience.senior_period')}</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-2 md:ml-4">
                <li>{t('cv.harvard.experience.senior_1')}</li>
                <li>{t('cv.harvard.experience.senior_2')}</li>
                <li>{t('cv.harvard.experience.senior_3')}</li>
                <li>{t('cv.harvard.experience.senior_4')}</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                <div className="mb-1 md:mb-0">
                  <h3 className="font-bold responsive-text">{t('cv.harvard.experience.instructor_title')}</h3>
                  <p className="italic text-xs md:text-sm">{t('cv.harvard.experience.instructor_company')}</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">{t('cv.harvard.experience.instructor_period')}</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-2 md:ml-4">
                <li>{t('cv.harvard.experience.instructor_1')}</li>
                <li>{t('cv.harvard.experience.instructor_2')}</li>
                <li>{t('cv.harvard.experience.instructor_3')}</li>
                <li>{t('cv.harvard.experience.instructor_4')}</li>
              </ul>
            </div>
          </motion.section>

          {/* Key Projects */}
          <motion.section
            className="mb-4 md:mb-8 page-break-inside-avoid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.projects.title')}</h2>
            {projects.map((proj, index) => (
              <div key={index} className="mb-3 md:mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                  <div>
                    <h3 className="font-bold responsive-text">{proj.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{proj.description}</p>
                    <p className="text-xs text-gray-500 mt-1"><strong>{currentLanguage === 'ES' ? 'Tecnologías:' : 'Technologies:'}</strong> {proj.tech}</p>
                  </div>
                  <span className="font-semibold text-xs md:text-sm">{proj.year}</span>
                </div>
              </div>
            ))}
          </motion.section>

          {/* Achievements */}
          <motion.section
            className="mb-4 md:mb-8 page-break-inside-avoid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.achievements.title')}</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-3 md:mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 md:mb-2">
                  <div>
                    <h3 className="font-bold responsive-text">{achievement.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-blue-600 font-semibold mt-1">{achievement.impact}</p>
                  </div>
                  <span className="font-semibold text-xs md:text-sm">{achievement.period}</span>
                </div>
              </div>
            ))}
          </motion.section>

          {/* Certifications */}
          <motion.section
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.certifications.title')}</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-2 md:mb-3 flex flex-col md:flex-row md:justify-between">
                <div>
                  <p className="font-semibold responsive-text">{cert.title}</p>
                  <p className="italic text-xs md:text-sm">{cert.organization}</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">{cert.year}</span>
              </div>
            ))}
          </motion.section>

          {/* Technical Skills */}
          <motion.section
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.skills.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              <div>
                <h3 className="font-bold mb-1 md:mb-2 responsive-text">{t('cv.harvard.skills.programming_title')}</h3>
                <p className="text-xs md:text-sm">{t('cv.harvard.skills.programming_list')}</p>

                <h3 className="font-bold mb-1 md:mb-2 mt-2 md:mt-4 responsive-text">{t('cv.harvard.skills.frameworks_title')}</h3>
                <p className="text-xs md:text-sm">{t('cv.harvard.skills.frameworks_list')}</p>
              </div>
              <div>
                <h3 className="font-bold mb-1 md:mb-2 responsive-text">{t('cv.harvard.skills.cloud_title')}</h3>
                <p className="text-xs md:text-sm">{t('cv.harvard.skills.cloud_list')}</p>

                <h3 className="font-bold mb-1 md:mb-2 mt-2 md:mt-4 responsive-text">{t('cv.harvard.skills.databases_title')}</h3>
                <p className="text-xs md:text-sm">{t('cv.harvard.skills.databases_list')}</p>
              </div>
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section
            className="mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-base md:text-2xl font-bold mb-2 md:mb-4 border-b border-gray-300">{t('cv.harvard.languages.title')}</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-1 md:space-y-0">
              <div>
                <span className="font-semibold responsive-text">{t('cv.harvard.languages.spanish')}:</span> <span className="text-xs md:text-sm">{t('cv.harvard.languages.spanish_level')}</span>
              </div>
              <div>
                <span className="font-semibold responsive-text">{t('cv.harvard.languages.english')}:</span> <span className="text-xs md:text-sm">{t('cv.harvard.languages.english_level')}</span>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default CVHarvard;