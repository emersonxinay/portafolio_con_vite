import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import SEOHead from '../../components/SEO/SEOHead';

const CVCorporate = () => {
  const { t, i18n } = useTranslation(['translation']);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ES' ? 'EN' : 'ES';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const keyMetrics = [
    { label: currentLanguage === 'ES' ? 'Años de Experiencia' : 'Years of Experience', value: "6+", icon: "fas fa-clock" },
    { label: currentLanguage === 'ES' ? 'Proyectos Exitosos' : 'Successful Projects', value: "50+", icon: "fas fa-project-diagram" },
    { label: currentLanguage === 'ES' ? 'Desarrolladores Mentoreados' : 'Developers Mentored', value: "200+", icon: "fas fa-users" },
    { label: currentLanguage === 'ES' ? 'Mejora en Performance' : 'Performance Improvement', value: "70%", icon: "fas fa-chart-line" },
    { label: currentLanguage === 'ES' ? 'Reducción de Costos' : 'Cost Reduction', value: "$2M+", icon: "fas fa-dollar-sign" },
    { label: currentLanguage === 'ES' ? 'Uptime en Producción' : 'Production Uptime', value: "99.9%", icon: "fas fa-server" }
  ];

  const coreCompetencies = [
    {
      category: currentLanguage === 'ES' ? 'Liderazgo Técnico' : 'Technical Leadership',
      skills: [
        currentLanguage === 'ES' ? 'Arquitectura de Software' : 'Software Architecture',
        currentLanguage === 'ES' ? 'Gestión de Equipos' : 'Team Management',
        currentLanguage === 'ES' ? 'Code Review' : 'Code Review',
        currentLanguage === 'ES' ? 'Mentoría Técnica' : 'Technical Mentoring',
        currentLanguage === 'ES' ? 'Planificación Estratégica' : 'Strategic Planning'
      ]
    },
    {
      category: currentLanguage === 'ES' ? 'Desarrollo Full Stack' : 'Full Stack Development',
      skills: ["React/Next.js", "Python/FastAPI", "Node.js", "TypeScript", "Microservices"]
    },
    {
      category: currentLanguage === 'ES' ? 'Cloud & DevOps' : 'Cloud & DevOps',
      skills: ["AWS/DigitalOcean", "Docker/Kubernetes", "CI/CD", "Nginx", "Monitoring"]
    },
    {
      category: currentLanguage === 'ES' ? 'Inteligencia Artificial' : 'Artificial Intelligence',
      skills: ["Machine Learning", "Data Science", "TensorFlow", currentLanguage === 'ES' ? 'Algoritmos' : 'Algorithms', "Big Data"]
    }
  ];

  const professionalExperience = [
    {
      title: t('cv.harvard.experience.cto_title'),
      company: t('cv.harvard.experience.cto_company'),
      period: t('cv.harvard.experience.cto_period'),
      location: "Santiago, Chile",
      achievements: [
        t('cv.harvard.experience.cto_1'),
        t('cv.harvard.experience.cto_2'),
        t('cv.harvard.experience.cto_3'),
        t('cv.harvard.experience.cto_4')
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Machine Learning"]
    },
    {
      title: t('cv.harvard.experience.senior_title'),
      company: t('cv.harvard.experience.senior_company'),
      period: t('cv.harvard.experience.senior_period'),
      location: "Santiago, Chile",
      achievements: [
        t('cv.harvard.experience.senior_1'),
        t('cv.harvard.experience.senior_2'),
        t('cv.harvard.experience.senior_3'),
        t('cv.harvard.experience.senior_4')
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "Docker", "Nginx", "Microservices"]
    },
    {
      title: t('cv.harvard.experience.lead_title'),
      company: t('cv.harvard.experience.lead_company'),
      period: t('cv.harvard.experience.lead_period'),
      location: "Santiago, Chile",
      achievements: [
        t('cv.harvard.experience.lead_1'),
        t('cv.harvard.experience.lead_2'),
        t('cv.harvard.experience.lead_3'),
        t('cv.harvard.experience.lead_4')
      ],
      technologies: ["Python", "Ruby on Rails", "JavaScript", "PostgreSQL", "AWS", "Teaching", "Curriculum Design"]
    },
    {
      title: t('cv.harvard.experience.instructor_title'),
      company: t('cv.harvard.experience.instructor_company'),
      period: t('cv.harvard.experience.instructor_period'),
      location: "Santiago, Chile",
      achievements: [
        t('cv.harvard.experience.instructor_1'),
        t('cv.harvard.experience.instructor_2'),
        t('cv.harvard.experience.instructor_3'),
        t('cv.harvard.experience.instructor_4')
      ],
      technologies: ["Python", "JavaScript", "React", "IoT", "Raspberry Pi", "Arduino", "Data Science"]
    }
  ];

  const businessValue = [
    {
      metric: currentLanguage === 'ES' ? '$2M+ en ahorros' : '$2M+ in savings',
      description: currentLanguage === 'ES' ? 'Optimización de infraestructura y procesos que generaron ahorros directos para clientes' : 'Infrastructure and process optimization that generated direct savings for clients'
    },
    {
      metric: currentLanguage === 'ES' ? '70% mejora performance' : '70% performance improvement',
      description: currentLanguage === 'ES' ? 'Implementación de arquitecturas modernas que mejoraron significativamente los tiempos de respuesta' : 'Implementation of modern architectures that significantly improved response times'
    },
    {
      metric: currentLanguage === 'ES' ? '99.9% uptime' : '99.9% uptime',
      description: currentLanguage === 'ES' ? 'Sistemas críticos en producción con disponibilidad enterprise-grade' : 'Critical production systems with enterprise-grade availability'
    },
    {
      metric: currentLanguage === 'ES' ? '200+ talentos formados' : '200+ talents trained',
      description: currentLanguage === 'ES' ? 'Desarrollo de capital humano tech con 95% inserción laboral exitosa' : 'Tech human capital development with 95% successful job placement'
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
      ? 'Emerson_Espinoza_CV_Corporate_ES.pdf'
      : 'Emerson_Espinoza_CV_Corporate_EN.pdf';

    pdf.save(fileName);
  };

  const corporateStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "Resume"],
    "name": "Emerson Espinoza Aguirre",
    "jobTitle": "Senior Software Engineer & Tech Lead",
    "description": "CV empresarial de Emerson Espinoza, especialista en soluciones tecnológicas escalables. CTO con track record de $2M+ en ahorros generados y 99.9% uptime en sistemas críticos",
    "url": "https://emersonespinoza.com/cv/corporate",
    "image": "https://emersonespinoza.com/assets/emerson-espinoza-5579c795.jpeg",
    "knowsAbout": [
      "Python", "React", "Machine Learning", "Artificial Intelligence", "FastAPI", "PostgreSQL",
      "Docker", "Kubernetes", "Microservices", "Software Architecture", "Technical Leadership"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Software Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "Santiago, Chile"
      }
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Technical Leadership & Software Architecture Consulting",
        "description": "Consultoría en liderazgo técnico, arquitectura de software, IA/ML y transformación digital"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      <SEOHead
        title={currentLanguage === 'ES'
          ? "CV Empresarial Emerson Espinoza - CTO & Tech Lead | Consultor IA/ML"
          : "Emerson Espinoza Corporate Resume - CTO & Tech Lead | AI/ML Consultant"
        }
        description={currentLanguage === 'ES'
          ? "CV empresarial de Emerson Espinoza, Senior Software Engineer & CTO con 6+ años liderando transformación digital. Especialista en IA/ML, Python, React. Track record: $2M+ ahorros, 99.9% uptime, 200+ desarrolladores formados. Consultor técnico para startups y empresas Fortune 500."
          : "Corporate resume of Emerson Espinoza, Senior Software Engineer & CTO with 6+ years leading digital transformation. AI/ML specialist, Python, React. Track record: $2M+ savings, 99.9% uptime, 200+ developers trained. Technical consultant for startups and Fortune 500 companies."
        }
        keywords="Emerson Espinoza CTO, Corporate Resume, Tech Lead, Senior Software Engineer, AI ML Consultant, Python Expert, React Developer, Technical Leadership, Software Architecture, Startup CTO, Enterprise Solutions, Digital Transformation Santiago Chile"
        url="https://emersonespinoza.com/cv/corporate"
        canonical="https://emersonespinoza.com/cv/corporate"
        structuredData={corporateStructuredData}
      />
      {/* Mobile-first styles */}
      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; }
          .bg-gradient-to-br { background: white !important; }
        }
        
        /* Mobile-first responsive text */
        .responsive-title { font-size: 1rem; }
        .responsive-subtitle { font-size: 0.875rem; }
        .responsive-text { font-size: 0.75rem; }
        .responsive-big-title { font-size: 1.5rem; }
        
        @media (min-width: 640px) {
          .responsive-title { font-size: 1.25rem; }
          .responsive-subtitle { font-size: 1rem; }
          .responsive-text { font-size: 0.875rem; }
          .responsive-big-title { font-size: 2rem; }
        }
        
        @media (min-width: 768px) {
          .responsive-title { font-size: 1.5rem; }
          .responsive-subtitle { font-size: 1.125rem; }
          .responsive-text { font-size: 0.9375rem; }
          .responsive-big-title { font-size: 2.5rem; }
        }
        
        @media (min-width: 1024px) {
          .responsive-title { font-size: 2rem; }
          .responsive-subtitle { font-size: 1.25rem; }
          .responsive-text { font-size: 1rem; }
          .responsive-big-title { font-size: 3rem; }
        }
        
        @media (min-width: 1280px) {
          .responsive-big-title { font-size: 3.5rem; }
        }
        
        /* PDF optimization - avoid page breaks in content */
        #cv-content {
          page-break-inside: avoid;
        }
        
        #cv-content section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        #cv-content .mb-4, #cv-content .mb-6, #cv-content .mb-8, #cv-content .mb-12 {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        #cv-content .bg-white {
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
            <span className="text-xs"></span>
            <span className="hidden xs:inline">{currentLanguage === 'ES' ? 'EN' : 'ES'}</span>
          </button>
          <button
            onClick={downloadPDF}
            className="control-btn pdf-btn"
            aria-label={t('cv.common.download_pdf')}
          >
            <i className="fas fa-file-pdf text-xs"></i>
            <span className="hidden xs:inline text-xs">{currentLanguage === 'ES' ? 'PDF' : 'PDF'}</span>
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div id="cv-content" className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 pt-16 mt-16 md:pt-0">
        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 md:py-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-3 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
              <div className="text-center md:text-left">
                <h1 className="responsive-big-title font-bold mb-2 md:mb-3">{t('cv.harvard.title')}</h1>
                <p className="responsive-subtitle mb-2 md:mb-4 text-blue-100">{t('cv.harvard.subtitle')}</p>
                <p className="responsive-text text-blue-200 max-w-3xl leading-relaxed">
                  {currentLanguage === 'ES' ? 'Ingeniero de Sistemas peruano 🇵🇪 con residencia en Chile 🇨🇱. Especialista en transformar desafíos empresariales complejos en soluciones tecnológicas escalables que generan ROI medible.' : 'Peruvian Systems Engineer 🇵🇪 with residence in Chile 🇨🇱. Specialist in transforming complex business challenges into scalable technological solutions that generate measurable ROI.'}
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="space-y-1 md:space-y-2 text-blue-100 text-xs md:text-sm">
                  <div><i className="fas fa-envelope mr-2"></i>{t('cv.harvard.email')}</div>
                  <div>
                    <a href="http://linkedin.com/in/emerson-espinoza-aguirre" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin mr-2"></i>{t('cv.harvard.linkedin')}
                    </a>
                  </div>
                  <div>
                    <a href="http://github.com/emersonxinay" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github mr-2"></i>{t('cv.harvard.github')}
                    </a>
                  </div>
                  <div><i className="fas fa-map-marker-alt mr-2"></i>{t('cv.harvard.location')}</div>
                </div>
              </div>
            </div>

            {/* Translation note */}
            <div className="mt-4 text-xs text-blue-200 italic text-center md:text-left">
              {t('cv.common.translate_note')}
            </div>
          </div>
        </motion.header>

        <div className="max-w-6xl mx-auto p-3 md:p-8">

          {/* Key Metrics */}
          <motion.section
            className="mb-6 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="responsive-title font-bold mb-3 md:mb-6 text-center">{currentLanguage === 'ES' ? ' Impacto Empresarial' : ' Business Impact'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-2 md:p-6 shadow-lg border border-gray-100 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-lg md:text-3xl mb-1 md:mb-2 text-blue-500">
                    <i className={metric.icon}></i>
                  </div>
                  <div className="text-sm md:text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Value Proposition */}
          <motion.section
            className="mb-6 md:mb-12 bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="responsive-title font-bold mb-3 md:mb-6">{currentLanguage === 'ES' ? ' Propuesta de Valor' : ' Value Proposition'}</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600">{currentLanguage === 'ES' ? '¿Por qué elegirme?' : 'Why choose me?'}</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="responsive-text"><strong>{currentLanguage === 'ES' ? 'Visión Estratégica:' : 'Strategic Vision:'}</strong> {currentLanguage === 'ES' ? 'Combino expertise técnico con entendimiento del negocio' : 'I combine technical expertise with business understanding'}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="responsive-text"><strong>{currentLanguage === 'ES' ? 'Liderazgo Probado:' : 'Proven Leadership:'}</strong> {currentLanguage === 'ES' ? 'He formado y liderado equipos técnicos de alto rendimiento' : 'I have formed and led high-performance technical teams'}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="responsive-text"><strong>{currentLanguage === 'ES' ? 'Innovación Práctica:' : 'Practical Innovation:'}</strong> {currentLanguage === 'ES' ? 'Implemento tecnologías emergentes que generan valor real' : 'I implement emerging technologies that generate real value'}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="responsive-text"><strong>{currentLanguage === 'ES' ? 'Resultados Medibles:' : 'Measurable Results:'}</strong> {currentLanguage === 'ES' ? 'Track record comprobado de ROI positivo en proyectos' : 'Proven track record of positive ROI in projects'}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600">{currentLanguage === 'ES' ? 'Valor Empresarial Entregado' : 'Business Value Delivered'}</h3>
                <div className="space-y-2 md:space-y-4">
                  {businessValue.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-2 md:pl-4">
                      <div className="font-bold responsive-text text-blue-600">{item.metric}</div>
                      <div className="text-xs md:text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Core Competencies */}
          <motion.section
            className="mb-6 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="responsive-title font-bold mb-3 md:mb-6"><i className="fas fa-tools mr-2"></i>{currentLanguage === 'ES' ? 'Competencias Clave' : 'Core Competencies'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {coreCompetencies.map((comp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-bold responsive-text mb-2 md:mb-4 text-blue-600">{comp.category}</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {comp.skills.map((skill, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-700 flex items-center">
                        <span className="w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full mr-1 md:mr-2 flex-shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Professional Experience */}
          <motion.section
            className="mb-6 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="responsive-title font-bold mb-3 md:mb-6"><i className="fas fa-briefcase mr-2"></i>{currentLanguage === 'ES' ? 'Experiencia Profesional' : 'Professional Experience'}</h2>
            <div className="space-y-4 md:space-y-8">
              {professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-8 shadow-lg border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4">
                    <div>
                      <h3 className="responsive-text font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-sm md:text-lg font-semibold text-blue-600">{exp.company}</p>
                      <p className="text-xs md:text-base text-gray-600">{exp.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-3 md:mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1 md:mb-2 text-xs md:text-sm">{currentLanguage === 'ES' ? 'Logros Clave:' : 'Key Achievements:'}</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start text-xs md:text-sm">
                          <span className="text-green-500 mr-1 md:mr-2 mt-1">▶</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1 md:mb-2 text-xs md:text-sm">{currentLanguage === 'ES' ? 'Tecnologías:' : 'Technologies:'}</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education & Certifications */}
          <motion.section
            className="mb-6 md:mb-12 bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="responsive-title font-bold mb-3 md:mb-6"><i className="fas fa-graduation-cap mr-2"></i>{currentLanguage === 'ES' ? 'Educación & Certificaciones' : 'Education & Certifications'}</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600">{currentLanguage === 'ES' ? 'Educación Universitaria' : 'University Education'}</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="font-bold responsive-text">{currentLanguage === 'ES' ? 'Ingeniero de Sistemas' : 'Systems Engineer'}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Universidad Nacional Hermilio Valdizán</p>
                    <p className="text-xs text-gray-500">{currentLanguage === 'ES' ? 'Huánuco, Perú • 2013-2018' : 'Huánuco, Peru • 2013-2018'}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600">{currentLanguage === 'ES' ? 'Certificaciones Profesionales' : 'Professional Certifications'}</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-award text-green-500 mr-2"></i>
                    <span className="text-xs md:text-sm">Full Stack Web Development (2020)</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-award text-green-500 mr-2"></i>
                    <span className="text-xs md:text-sm">Python for Data Science & AI (2022)</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-award text-green-500 mr-2"></i>
                    <span className="text-xs md:text-sm">Docker & Kubernetes (2023)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Languages & Additional Info */}
          <motion.section
            className="mb-6 md:mb-12 bg-white rounded-lg md:rounded-xl p-3 md:p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600"><i className="fas fa-language mr-2"></i>{currentLanguage === 'ES' ? 'Idiomas' : 'Languages'}</h3>
                <div className="space-y-1 md:space-y-2">
                  <div>
                    <span className="font-semibold text-xs md:text-sm">{currentLanguage === 'ES' ? 'Español:' : 'Spanish:'}</span> <span className="text-xs md:text-sm">{currentLanguage === 'ES' ? 'Nativo' : 'Native'}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-xs md:text-sm">{currentLanguage === 'ES' ? 'Inglés:' : 'English:'}</span> <span className="text-xs md:text-sm">{currentLanguage === 'ES' ? 'Intermedio' : 'Intermediate'}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600"><i className="fas fa-map-marker-alt mr-2"></i>{currentLanguage === 'ES' ? 'Disponibilidad' : 'Availability'}</h3>
                <div className="space-y-1 md:space-y-2 text-gray-700">
                  <p className="text-xs md:text-sm"><i className="fas fa-check text-green-500 mr-2"></i>{currentLanguage === 'ES' ? 'Trabajo remoto' : 'Remote work'}</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-check text-green-500 mr-2"></i>{currentLanguage === 'ES' ? 'Proyectos consultoría' : 'Consulting projects'}</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-check text-green-500 mr-2"></i>{currentLanguage === 'ES' ? 'Liderazgo técnico' : 'Technical leadership'}</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-check text-green-500 mr-2"></i>{currentLanguage === 'ES' ? 'Disponible inmediato' : 'Immediately available'}</p>
                </div>
              </div>
              <div>
                <h3 className="responsive-subtitle font-semibold mb-2 md:mb-4 text-blue-600"><i className="fas fa-target mr-2"></i>{currentLanguage === 'ES' ? 'Objetivos' : 'Goals'}</h3>
                <div className="space-y-1 md:space-y-2 text-gray-700">
                  <p className="text-xs md:text-sm"><i className="fas fa-angle-right text-blue-500 mr-2"></i>CTO/Tech Lead roles</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-angle-right text-blue-500 mr-2"></i>{currentLanguage === 'ES' ? 'Proyectos de alto impacto' : 'High-impact projects'}</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-angle-right text-blue-500 mr-2"></i>{currentLanguage === 'ES' ? 'Transformación digital' : 'Digital transformation'}</p>
                  <p className="text-xs md:text-sm"><i className="fas fa-angle-right text-blue-500 mr-2"></i>{currentLanguage === 'ES' ? 'Innovación tecnológica' : 'Technological innovation'}</p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default CVCorporate;