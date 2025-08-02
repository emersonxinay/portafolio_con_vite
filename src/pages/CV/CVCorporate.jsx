import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVCorporate = () => {
  const { t } = useTranslation(['translation']);

  const keyMetrics = [
    { label: "Años de Experiencia", value: "6+", icon: "⏱️" },
    { label: "Proyectos Exitosos", value: "50+", icon: "🚀" },
    { label: "Desarrolladores Mentoreados", value: "200+", icon: "👥" },
    { label: "Mejora en Performance", value: "70%", icon: "📈" },
    { label: "Reducción de Costos", value: "$2M+", icon: "💰" },
    { label: "Uptime en Producción", value: "99.9%", icon: "🎯" }
  ];

  const coreCompetencies = [
    {
      category: "Liderazgo Técnico",
      skills: ["Arquitectura de Software", "Gestión de Equipos", "Code Review", "Mentoría Técnica", "Planificación Estratégica"]
    },
    {
      category: "Desarrollo Full Stack",
      skills: ["React/Next.js", "Python/FastAPI", "Node.js", "TypeScript", "Microservicios"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS/DigitalOcean", "Docker/Kubernetes", "CI/CD", "Nginx", "Monitoring"]
    },
    {
      category: "Inteligencia Artificial",
      skills: ["Machine Learning", "Data Science", "TensorFlow", "Algoritmos", "Big Data"]
    }
  ];

  const professionalExperience = [
    {
      title: "Founder & CTO",
      company: "CompilandoCode",
      period: "2022 - Presente",
      location: "Santiago, Chile",
      achievements: [
        "Fundé empresa EdTech que sirve 500+ estudiantes en Latinoamérica",
        "Desarrollé plataforma LMS con IA que mejoró retención estudiantil 40%",
        "Construí arquitectura escalable soportando 1000+ usuarios concurrentes",
        "Generé $200K+ en revenue anual a través de productos digitales innovadores"
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Machine Learning"]
    },
    {
      title: "Senior Software Engineer & Tech Lead",
      company: "Hazuki Restaurant Systems",
      period: "2018 - 2021",
      location: "Santiago, Chile",
      achievements: [
        "Lideré desarrollo de sistema enterprise procesando 50K+ transacciones/mes",
        "Implementé arquitectura microservicios reduciendo tiempo respuesta 70%",
        "Optimicé infraestructura cloud ahorrando $15K anuales en costos operativos",
        "Mantuve 99.9% uptime en sistemas críticos de producción"
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "JavaScript", "Docker", "Nginx", "Microservices"]
    },
    {
      title: "Lead Technical Instructor",
      company: "Desafío Latam",
      period: "2021 - Presente",
      location: "Santiago, Chile",
      achievements: [
        "Formé 200+ desarrolladores con 95% tasa de empleabilidad en empresas tech",
        "Diseñé curriculum enterprise adoptado por 5+ instituciones educativas",
        "Mentoré equipos desarrollando 50+ aplicaciones en producción",
        "Establecí partnerships con empresas para pipeline directo de contratación"
      ],
      technologies: ["Python", "Ruby on Rails", "JavaScript", "PostgreSQL", "AWS", "Teaching", "Curriculum Design"]
    },
    {
      title: "Senior Technical Instructor",
      company: "Código Futuro",
      period: "2022 - Presente",
      location: "Santiago, Chile",
      achievements: [
        "Desarrollé programas especializados en IA y Data Science",
        "Implementé metodologías hands-on aumentando engagement 60%",
        "Colaboré con industria tech para diseñar contenido relevante",
        "Mantuve 4.9/5 rating de satisfacción estudiantil consistentemente"
      ],
      technologies: ["Python", "JavaScript", "React", "IoT", "Raspberry Pi", "Arduino", "Data Science"]
    }
  ];

  const businessValue = [
    {
      metric: "$2M+ en ahorros",
      description: "Optimización de infraestructura y procesos que generaron ahorros directos para clientes"
    },
    {
      metric: "70% mejora performance",
      description: "Implementación de arquitecturas modernas que mejoraron significativamente los tiempos de respuesta"
    },
    {
      metric: "99.9% uptime",
      description: "Sistemas críticos en producción con disponibilidad enterprise-grade"
    },
    {
      metric: "200+ talentos formados",
      description: "Desarrollo de capital humano tech con 95% inserción laboral exitosa"
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

    pdf.save('Emerson_Espinoza_CV_Corporate.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
      {/* Mobile-first styles */}
      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; }
          .bg-gradient-to-br { background: white !important; }
        }
        
        /* Mobile-first responsive text */
        .responsive-title { font-size: 1.5rem; }
        .responsive-subtitle { font-size: 1rem; }
        .responsive-text { font-size: 0.875rem; }
        .responsive-big-title { font-size: 2rem; }
        
        @media (min-width: 640px) {
          .responsive-title { font-size: 2rem; }
          .responsive-subtitle { font-size: 1.125rem; }
          .responsive-text { font-size: 0.9375rem; }
          .responsive-big-title { font-size: 2.5rem; }
        }
        
        @media (min-width: 768px) {
          .responsive-title { font-size: 2.5rem; }
          .responsive-subtitle { font-size: 1.25rem; }
          .responsive-text { font-size: 1rem; }
          .responsive-big-title { font-size: 3rem; }
        }
        
        @media (min-width: 1024px) {
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
      `}</style>

      {/* Fixed Download Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-xs md:text-sm"
        >
          📄 Descargar PDF
        </button>
      </div>

      {/* CV Content */}
      <div id="cv-content" className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
        {/* Header */}
        <motion.header
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 md:py-12 mt-16 md:mt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h1 className="responsive-big-title font-bold mb-2 md:mb-3">Emerson Espinoza</h1>
                <p className="responsive-subtitle mb-3 md:mb-4 text-blue-100">Senior Software Engineer & Technical Leader</p>
                <p className="responsive-text text-blue-200 max-w-3xl leading-relaxed">
                  Ingeniero de Sistemas peruano 🇵🇪 con residencia en Chile 🇨🇱. Especialista en transformar
                  desafíos empresariales complejos en soluciones tecnológicas escalables que generan ROI medible.
                </p>
              </div>
              <div className="text-center md:text-right">
                <div className="space-y-1 md:space-y-2 text-blue-100 text-xs md:text-sm">
                  <span>📧 xinayespinoza@gmail.com</span>
                  <span> <a href="http://linkedin.com/in/emerson-espinoza-aguirre" target="_blank" rel="noopener noreferrer">🌐 LinkedIn: /in/emerson-espinoza-aguirre</a> </span>
                  <span><a href="http://github.com/emersonxinay" target="_blank" rel="noopener noreferrer">Github: /emersonxinay </a></span>
                  <span>📍Chile y Perú </span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="max-w-6xl mx-auto p-4 md:p-8">

          {/* Key Metrics */}
          <motion.section
            className="mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="responsive-title font-bold mb-4 md:mb-6 text-center">📊 Impacto Empresarial</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border border-gray-100 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-xl md:text-3xl mb-1 md:mb-2">{metric.icon}</div>
                  <div className="text-lg md:text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Value Proposition */}
          <motion.section
            className="mb-8 md:mb-12 bg-white rounded-lg md:rounded-xl p-4 md:p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="responsive-title font-bold mb-4 md:mb-6">🎯 Propuesta de Valor</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="responsive-subtitle font-semibold mb-3 md:mb-4 text-blue-600">¿Por qué elegirme?</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="responsive-text"><strong>Visión Estratégica:</strong> Combino expertise técnico con entendimiento del negocio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="responsive-text"><strong>Liderazgo Probado:</strong> He formado y liderado equipos técnicos de alto rendimiento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="responsive-text"><strong>Innovación Práctica:</strong> Implemento tecnologías emergentes que generan valor real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="responsive-text"><strong>Resultados Medibles:</strong> Track record comprobado de ROI positivo en proyectos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="responsive-subtitle font-semibold mb-3 md:mb-4 text-blue-600">Valor Empresarial Entregado</h3>
                <div className="space-y-3 md:space-y-4">
                  {businessValue.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-3 md:pl-4">
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
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">🛠️ Competencias Clave</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((comp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-bold text-lg mb-4 text-blue-600">{comp.category}</h3>
                  <ul className="space-y-2">
                    {comp.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
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
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">💼 Experiencia Profesional</h2>
            <div className="space-y-8">
              {professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Logros Clave:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">▶</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
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
            className="mb-12 bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">🎓 Educación & Certificaciones</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Educación Universitaria Presencial</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">Ingeniero de Sistemas</h4>
                    <p className="text-gray-600">Universidad Nacional Hermilio Valdizan</p>
                    <p className="text-sm text-gray-500">Huánuco, Perú • 2013-2018</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Certificaciones Profesionales</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">🏆</span>
                    <span>AWS Solutions Architect (2023)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">🏆</span>
                    <span>Machine Learning Specialization - Stanford (2022)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">🏆</span>
                    <span>Kubernetes Application Developer (2022)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Languages & Additional Info */}
          <motion.section
            className="mb-12 bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">🌍 Idiomas</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Español:</span> Nativo
                  </div>
                  <div>
                    <span className="font-semibold">Inglés:</span> Profesional
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">📍 Disponibilidad</h3>
                <div className="space-y-2 text-gray-700">
                  <p>✓ Trabajo remoto</p>
                  <p>✓ Proyectos consultoria</p>
                  <p>✓ Liderazgo técnico</p>
                  <p>✓ Disponible inmediato</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">🎯 Objetivos</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• CTO/Tech Lead roles</p>
                  <p>• Proyectos de alto impacto</p>
                  <p>• Transformación digital</p>
                  <p>• Innovación tecnológica</p>
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