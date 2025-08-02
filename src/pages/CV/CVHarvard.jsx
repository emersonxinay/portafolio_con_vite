import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVHarvard = () => {
  const { t } = useTranslation(['translation']);

  const education = [
    {
      degree: "Ingeniero de Sistemas",
      institution: "Universidad Nacional Hermilio Valdizan",
      location: "Huacho, Perú",
      year: "2013-2018",
      honors: "Graduado"
    },
    {
      degree: "Especialización en Full Stack Web Development",
      institution: "Desafío Latam",
      location: "Santiago, Chile",
      year: "2019-2020"
    },
    {
      degree: "Especialización en Python y Machine Learning",
      institution: "Platzi",
      location: "Online",
      year: "2021"
    },
    {
      degree: "Actualización constante",
      institution: "plataformas como Udemy, Coursera, EdTeam, Youtube",
      location: "Online",
      year: "siempre activo",
    }
  ];

  const projects = [
    {
      title: "Sistema de Gestión Restaurante Hazuki",
      description: "Plataforma completa para manejo de pedidos, inventario y reportes",
      year: "2019",
      tech: "Python, Flask, PostgreSQL, React"
    },
    {
      title: "CompilandoCode - Plataforma Educativa",
      description: "LMS con más de 500 estudiantes activos y sistema de evaluación automática",
      year: "2022",
      tech: "React, FastAPI, MongoDB, Docker"
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      organization: "Desafío Latam",
      year: "2020"
    },
    {
      title: "Python para Data Science e IA",
      organization: "Platzi",
      year: "2022"
    },
    {
      title: "Docker y Kubernetes",
      organization: "Udemy",
      year: "2023"
    }
  ];

  const achievements = [
    {
      title: "Optimización de Performance en Sistemas Enterprise",
      description: "Lideré implementación de arquitectura microservicios resultando en 70% mejora performance",
      period: "2020-2021",
      impact: "50K+ transacciones/mes procesadas"
    },
    {
      title: "Desarrollo Plataforma Educativa Escalable",
      description: "Construí sistema LMS soportando 1000+ usuarios concurrentes con 99.9% uptime",
      period: "2022-2023",
      impact: "500+ estudiantes formados"
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

    pdf.save('Emerson_Espinoza_CV_Harvard.pdf');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Mobile-first styles */}
      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; }
        }
        
        /* Mobile-first responsive text */
        .responsive-title { font-size: 1.5rem; }
        .responsive-subtitle { font-size: 1rem; }
        .responsive-text { font-size: 0.875rem; }
        
        @media (min-width: 640px) {
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
      `}</style>

      {/* Fixed Download Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm md:text-base"
        >
          📄 Descargar PDF
        </button>
      </div>

      {/* CV Content */}
      <div id="cv-content" className="bg-white text-black">
        {/* Header */}
        <motion.header
          className="text-center py-6 md:py-8 border-b-2 border-gray-800 mt-16 md:mt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="responsive-title font-bold mb-2 md:mb-4">EMERSON ESPINOZA</h1>
          <p className="responsive-subtitle text-gray-600 mb-4">Senior Software Engineer & Technical Leader</p>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-2 md:space-y-0 text-xs md:text-sm text-gray-700 px-4">
            <span>📧 xinayespinoza@gmail.com</span>
            <span> <a href="http://linkedin.com/in/emerson-espinoza-aguirre" target="_blank" rel="noopener noreferrer">🌐 LinkedIn: /in/emerson-espinoza-aguirre</a> </span>
            <span><a href="http://github.com/emersonxinay" target="_blank" rel="noopener noreferrer">Github: /emersonxinay </a></span>
            <span>📍Chile y Perú </span>

          </div>
        </motion.header>

        <div className="max-w-4xl mx-auto p-4 md:p-8">

          {/* Executive Summary */}
          <motion.section
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">RESUMEN EJECUTIVO</h2>
            <p className="responsive-text text-justify leading-relaxed">
              Ingeniero de Sistemas peruano con 6+ años de experiencia liderando innovación técnica en entornos empresariales.
              Historial comprobado arquitecturando soluciones escalables que procesan millones de transacciones mientras reducen
              costos operativos en 60%. Experto en implementación IA/ML, arquitectura de microservicios y liderazgo técnico.
              Exitosamente mentoré 200+ desarrolladores con 95% tasa de colocación en empresas tecnológicas de primer nivel.
            </p>
          </motion.section>

          {/* Education */}
          <motion.section
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">EDUCACIÓN</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3 md:mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-2 md:mb-0">
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
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">EXPERIENCIA PROFESIONAL</h2>

            <div className="mb-4 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-bold responsive-text">Founder & Chief Technology Officer</h3>
                  <p className="italic text-xs md:text-sm">CompilandoCode, Santiago, Chile</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">Feb 2022 - Presente</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-4">
                <li>Fundé empresa tecnología educativa sirviendo 500+ estudiantes en Latinoamérica</li>
                <li>Desarrollé sistema LMS propietario con personalización potenciada por IA</li>
                <li>Construí arquitectura plataforma escalable soportando 1000+ usuarios concurrentes</li>
                <li>Logré 40% mejora retención estudiantil a través optimización curriculum data-driven</li>
              </ul>
            </div>

            <div className="mb-4 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-bold responsive-text">Lead Technical Instructor</h3>
                  <p className="italic text-xs md:text-sm">Desafío Latam, Santiago, Chile</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">Nov 2021 - Presente</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-4">
                <li>Lideré entrenamiento técnico para 200+ desarrolladores con 95% tasa colocación laboral</li>
                <li>Diseñé curriculum enterprise adoptado por 5+ instituciones educativas</li>
                <li>Mentoré equipos desarrollando 50+ aplicaciones producción</li>
                <li>Establecí partnerships industria resultando en pipeline directo contratación</li>
              </ul>
            </div>

            <div className="mb-4 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-bold responsive-text">Senior Software Engineer & Tech Lead</h3>
                  <p className="italic text-xs md:text-sm">Hazuki Restaurant Systems, Santiago, Chile</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">Feb 2018 - 2021</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-4">
                <li>Lideré desarrollo de sistema enterprise procesando 50K+ transacciones/mes con 99.9% uptime</li>
                <li>Implementé arquitectura microservicios reduciendo tiempo respuesta 70%</li>
                <li>Optimicé infraestructura cloud resultando en $15K reducción costo anual</li>
                <li>Mentoré desarrolladores junior y establecí mejores prácticas code review</li>
              </ul>
            </div>

            <div className="mb-4 md:mb-6 page-break-inside-avoid">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="mb-2 md:mb-0">
                  <h3 className="font-bold responsive-text">Senior Technical Instructor</h3>
                  <p className="italic text-xs md:text-sm">Código Futuro, Santiago, Chile</p>
                </div>
                <span className="font-semibold text-xs md:text-sm">Ago 2022 - Presente</span>
              </div>
              <ul className="list-disc list-inside text-xs md:text-sm space-y-1 ml-4">
                <li>Desarrollé programas especializados en IA y Data Science</li>
                <li>Implementé metodologías hands-on aumentando engagement 60%</li>
                <li>Colaboré con industria tech para diseñar contenido relevante</li>
                <li>Mantuve 4.9/5 rating de satisfacción estudiantil consistentemente</li>
              </ul>
            </div>
          </motion.section>

          {/* Key Projects */}
          <motion.section
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">PROYECTOS DESTACADOS</h2>
            {projects.map((proj, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="font-bold responsive-text">{proj.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{proj.description}</p>
                    <p className="text-xs text-gray-500 mt-1"><strong>Tecnologías:</strong> {proj.tech}</p>
                  </div>
                  <span className="font-semibold text-xs md:text-sm">{proj.year}</span>
                </div>
              </div>
            ))}
          </motion.section>

          {/* Achievements */}
          <motion.section
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">LOGROS DESTACADOS</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
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
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">CERTIFICACIONES</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-3 flex flex-col md:flex-row md:justify-between">
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
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">COMPETENCIAS TÉCNICAS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="font-bold mb-2 responsive-text">Lenguajes de Programación</h3>
                <p className="text-xs md:text-sm">Python, JavaScript, TypeScript, Ruby, C#, SQL</p>

                <h3 className="font-bold mb-2 mt-3 md:mt-4 responsive-text">Frameworks & Librerías</h3>
                <p className="text-xs md:text-sm">React, Next.js, Flask, FastAPI, Django, Ruby on Rails</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 responsive-text">Cloud & DevOps</h3>
                <p className="text-xs md:text-sm">DigitalOcean, Docker, Nginx, Git, CI/CD</p>

                <h3 className="font-bold mb-2 mt-3 md:mt-4 responsive-text">Bases de Datos</h3>
                <p className="text-xs md:text-sm">PostgreSQL, MongoDB, MySQL, Redis</p>
              </div>
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section
            className="mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 border-b border-gray-300">IDIOMAS</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <div>
                <span className="font-semibold responsive-text">Español:</span> <span className="text-xs md:text-sm">Nativo</span>
              </div>
              <div>
                <span className="font-semibold responsive-text">Inglés:</span> <span className="text-xs md:text-sm">Intermedio</span>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default CVHarvard;