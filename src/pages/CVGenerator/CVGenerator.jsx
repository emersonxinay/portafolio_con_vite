import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultCVData, cvTemplates, jobPresets } from '../../data/cvTemplateData';
import CVPreview from './CVPreview';
import CVForm from './CVForm';
import SEOHead from '../../components/SEO/SEOHead';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

const CVGenerator = () => {
  const { t } = useTranslation();
  const [cvData, setCvData] = useState(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState('harvard');
  const [savedVersions, setSavedVersions] = useState([]);
  const [currentVersion, setCurrentVersion] = useState('');
  const [showPreview, setShowPreview] = useState(true);
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [showVersions, setShowVersions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const formRef = useRef(null);

  // Cargar versiones guardadas del localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cvVersions');
    if (saved) {
      setSavedVersions(JSON.parse(saved));
    }
  }, []);

  // Guardar versión
  const saveVersion = () => {
    const versionName = prompt('Nombre de esta versión del CV:\n(Ej: "CV Backend Senior - Google")');
    if (!versionName) return;

    setIsSaving(true);

    setTimeout(() => {
      const newVersion = {
        id: Date.now(),
        name: versionName,
        template: selectedTemplate,
        data: cvData,
        createdAt: new Date().toISOString()
      };

      const updated = [...savedVersions, newVersion];
      setSavedVersions(updated);
      localStorage.setItem('cvVersions', JSON.stringify(updated));
      setCurrentVersion(versionName);
      setIsSaving(false);

      // Toast notification
      const toast = document.createElement('div');
      toast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
      toast.innerHTML = `<i class="fas fa-check-circle mr-2"></i>CV "${versionName}" guardado!`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }, 300);
  };

  // Cargar versión
  const loadVersion = (version) => {
    setCvData(version.data);
    setSelectedTemplate(version.template);
    setCurrentVersion(version.name);
    setShowVersions(false);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Eliminar versión
  const deleteVersion = (id, e) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta versión del CV?')) return;

    const updated = savedVersions.filter(v => v.id !== id);
    setSavedVersions(updated);
    localStorage.setItem('cvVersions', JSON.stringify(updated));
  };

  // Aplicar preset de trabajo
  const applyJobPreset = (presetKey) => {
    const preset = jobPresets[presetKey];
    if (!preset) return;

    const updatedData = { ...cvData };

    // Habilitar solo proyectos relevantes
    updatedData.projects = updatedData.projects.map(project => ({
      ...project,
      enabled: preset.enabledSections.projects.includes(project.id)
    }));

    // Habilitar solo experiencia relevante
    updatedData.experience = updatedData.experience.map(exp => ({
      ...exp,
      enabled: preset.enabledSections.experience.includes(exp.id)
    }));

    setCvData(updatedData);
    setCurrentVersion(preset.name);

    // Toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
    toast.innerHTML = `<i class="fas fa-bolt mr-2"></i>Preset "${preset.name}" aplicado`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  // Exportar datos a JSON
  const exportToJSON = () => {
    const dataStr = JSON.stringify({ template: selectedTemplate, data: cvData }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `cv-${currentVersion.replace(/\s+/g, '-') || 'export'}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Importar datos desde JSON
  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        setCvData(imported.data);
        setSelectedTemplate(imported.template);

        const toast = document.createElement('div');
        toast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
        toast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Datos importados correctamente';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
      } catch (error) {
        alert('❌ Error al importar. Verifica que sea un archivo JSON válido.');
      }
    };
    reader.readAsText(file);
  };

  // Exportar a PDF con imagen (mejorado con paginación)
  const downloadPDFImage = async () => {
    const element = document.getElementById('cv-preview');
    if (!element) return;

    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl z-50';
    toast.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generando PDF con imagen...';
    document.body.appendChild(toast);

    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = margin;

    // Primera página
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
    heightLeft -= (pageHeight - margin);

    // Agregar páginas adicionales si es necesario
    while (heightLeft > 0) {
      position = heightLeft - imgHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName = `${currentVersion.replace(/\s+/g, '-') || 'cv'}-${selectedTemplate}-image.pdf`;
    pdf.save(fileName);

    toast.remove();
    const successToast = document.createElement('div');
    successToast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
    successToast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>PDF descargado!';
    document.body.appendChild(successToast);
    setTimeout(() => successToast.remove(), 3000);
  };

  // Exportar a PDF con texto seleccionable
  const downloadPDFText = () => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl z-50';
    toast.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generando PDF con texto...';
    document.body.appendChild(toast);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    let yPos = margin;

    // Función para agregar texto con word wrap
    const addText = (text, fontSize, isBold = false, align = 'left') => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      const lines = pdf.splitTextToSize(text, contentWidth);

      lines.forEach(line => {
        if (yPos > 280) {
          pdf.addPage();
          yPos = margin;
        }

        let xPos = margin;
        if (align === 'center') {
          xPos = pageWidth / 2;
        }

        pdf.text(line, xPos, yPos, { align });
        yPos += fontSize * 0.5;
      });
    };

    // Función para agregar títulos de sección según template
    const addSectionTitle = (title) => {
      if (selectedTemplate === 'corporate') {
        pdf.setTextColor(37, 99, 235);
        addText(title, 13, true);
        pdf.setTextColor(0, 0, 0);
        yPos += 1;
        pdf.setDrawColor(37, 99, 235);
        pdf.setLineWidth(0.5);
        pdf.line(margin, yPos, margin + 40, yPos);
        yPos += 5;
      } else if (selectedTemplate === 'harvard') {
        pdf.setTextColor(0, 0, 0);
        addText(title, 12, true);
        yPos += 1;
        pdf.setDrawColor(150, 150, 150);
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPos, pageWidth - margin, yPos);
        yPos += 5;
      } else if (selectedTemplate === 'minimal') {
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text(title, margin, yPos);
        yPos += 4;
      }
    };

    // Header según template
    if (selectedTemplate === 'corporate') {
      // Header Corporate (con fondo azul)
      pdf.setFillColor(37, 99, 235);
      pdf.rect(0, 0, pageWidth, 45, 'F');
      pdf.setTextColor(255, 255, 255);
      addText(cvData.personalInfo.fullName, 20, true, 'center');
      yPos += 2;
      addText(cvData.personalInfo.title, 12, false, 'center');
      yPos += 5;
      addText(`${cvData.personalInfo.email} | ${cvData.personalInfo.phone} | ${cvData.personalInfo.location}`, 9, false, 'center');
      yPos = 50;
      pdf.setTextColor(0, 0, 0);
    } else if (selectedTemplate === 'harvard') {
      // Header Harvard (centrado con borde)
      pdf.setTextColor(0, 0, 0);
      addText(cvData.personalInfo.fullName, 18, true, 'center');
      yPos += 2;
      addText(cvData.personalInfo.title, 11, false, 'center');
      yPos += 4;
      addText(`${cvData.personalInfo.email} | ${cvData.personalInfo.phone} | ${cvData.personalInfo.location}`, 8, false, 'center');
      yPos += 3;
      pdf.setDrawColor(150, 150, 150);
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 8;
    } else if (selectedTemplate === 'minimal') {
      // Header Minimal (simple, izquierda)
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text(cvData.personalInfo.fullName, margin, yPos);
      yPos += 6;
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(100, 100, 100);
      pdf.text(cvData.personalInfo.title, margin, yPos);
      yPos += 5;
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.8);
      pdf.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 6;
      pdf.setFontSize(8);
      pdf.text(`CONTACT: ${cvData.personalInfo.email} | ${cvData.personalInfo.phone}`, margin, yPos);
      yPos += 4;
      pdf.text(`LOCATION: ${cvData.personalInfo.location}`, margin, yPos);
      yPos += 8;
      pdf.setTextColor(0, 0, 0);
    }

    // Summary
    if (cvData.summary) {
      yPos += 5;
      addSectionTitle(selectedTemplate === 'minimal' ? 'ABOUT' : 'RESUMEN PROFESIONAL');
      pdf.setTextColor(0, 0, 0);
      addText(cvData.summary, 10);
      yPos += 5;
    }

    // Experience
    const enabledExperience = cvData.experience.filter(exp => exp.enabled);
    if (enabledExperience.length > 0) {
      yPos += 5;
      addSectionTitle(selectedTemplate === 'minimal' ? 'EXPERIENCE' : 'EXPERIENCIA PROFESIONAL');

      enabledExperience.forEach(exp => {
        if (yPos > 250) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setTextColor(0, 0, 0);
        addText(exp.title, 11, true);
        yPos += 1;

        // Color según template
        if (selectedTemplate === 'corporate') {
          pdf.setTextColor(37, 99, 235);
        } else if (selectedTemplate === 'harvard') {
          pdf.setTextColor(0, 0, 0);
        } else {
          pdf.setTextColor(60, 60, 60);
        }

        addText(`${exp.company} | ${exp.location}`, 9, false);
        yPos += 1;
        pdf.setTextColor(100, 100, 100);
        addText(exp.period, 8);
        pdf.setTextColor(0, 0, 0);
        yPos += 3;

        exp.achievements.forEach(achievement => {
          if (achievement) {
            if (yPos > 270) {
              pdf.addPage();
              yPos = margin;
            }

            // Bullet style según template
            if (selectedTemplate === 'minimal') {
              pdf.text('•', margin, yPos);
              pdf.text(achievement, margin + 5, yPos);
            } else {
              pdf.circle(margin + 2, yPos - 1, 0.5, 'F');
              pdf.text(`  ${achievement}`, margin + 5, yPos);
            }

            const lines = pdf.splitTextToSize(achievement, contentWidth - 5);
            yPos += lines.length * 4;
          }
        });

        if (exp.technologies.length > 0) {
          yPos += 2;
          pdf.setTextColor(100, 100, 100);
          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'bold');
          pdf.text('Tecnologías:', margin, yPos);
          pdf.setFont('helvetica', 'normal');
          const techText = exp.technologies.join(', ');
          pdf.text(techText, margin + 25, yPos);
          yPos += 4;
          pdf.setTextColor(0, 0, 0);
        }
        yPos += 5;
      });
    }

    // Projects
    const enabledProjects = cvData.projects.filter(p => p.enabled);
    if (enabledProjects.length > 0) {
      yPos += 5;
      if (yPos > 250) {
        pdf.addPage();
        yPos = margin;
      }
      addSectionTitle(selectedTemplate === 'minimal' ? 'PROJECTS' : 'PROYECTOS DESTACADOS');

      enabledProjects.forEach(project => {
        if (yPos > 260) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setTextColor(0, 0, 0);
        addText(project.title, 11, true);
        yPos += 1;
        pdf.setTextColor(100, 100, 100);
        addText(project.year, 8);
        pdf.setTextColor(0, 0, 0);
        yPos += 3;
        addText(project.description, 9);
        yPos += 2;
        if (project.technologies.length > 0) {
          pdf.setTextColor(100, 100, 100);
          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'bold');
          pdf.text('Stack:', margin, yPos);
          pdf.setFont('helvetica', 'normal');
          pdf.text(project.technologies.join(', '), margin + 15, yPos);
          yPos += 4;
          pdf.setTextColor(0, 0, 0);
        }
        yPos += 4;
      });
    }

    // Education
    const enabledEducation = cvData.education.filter(e => e.enabled);
    if (enabledEducation.length > 0) {
      yPos += 5;
      if (yPos > 250) {
        pdf.addPage();
        yPos = margin;
      }
      addSectionTitle(selectedTemplate === 'minimal' ? 'EDUCATION' : 'EDUCACIÓN');

      enabledEducation.forEach(edu => {
        if (yPos > 270) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setTextColor(0, 0, 0);
        addText(edu.degree, 11, true);
        yPos += 1;
        addText(`${edu.institution} | ${edu.location}`, 9);
        yPos += 1;
        pdf.setTextColor(100, 100, 100);
        addText(edu.period, 8);
        pdf.setTextColor(0, 0, 0);
        if (edu.details) {
          yPos += 2;
          addText(edu.details, 8);
        }
        yPos += 4;
      });
    }

    // Skills
    yPos += 5;
    if (yPos > 220) {
      pdf.addPage();
      yPos = margin;
    }
    addSectionTitle(selectedTemplate === 'minimal' ? 'SKILLS' : 'HABILIDADES TÉCNICAS');

    if (cvData.skills.programming.length > 0) {
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Lenguajes:', margin, yPos);
      yPos += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text(cvData.skills.programming.join(', '), margin, yPos);
      yPos += 5;
    }

    if (cvData.skills.frameworks.length > 0) {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Frameworks:', margin, yPos);
      yPos += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text(cvData.skills.frameworks.join(', '), margin, yPos);
      yPos += 5;
    }

    if (cvData.skills.cloud.length > 0) {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Cloud & DevOps:', margin, yPos);
      yPos += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text(cvData.skills.cloud.join(', '), margin, yPos);
      yPos += 5;
    }

    if (cvData.skills.databases.length > 0) {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Bases de Datos:', margin, yPos);
      yPos += 4;
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      pdf.text(cvData.skills.databases.join(', '), margin, yPos);
    }

    const fileName = `${currentVersion.replace(/\s+/g, '-') || 'cv'}-${selectedTemplate}-text.pdf`;
    pdf.save(fileName);

    toast.remove();
    const successToast = document.createElement('div');
    successToast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
    successToast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>PDF con texto seleccionable descargado!';
    document.body.appendChild(successToast);
    setTimeout(() => successToast.remove(), 3000);
  };

  // Exportar a Word (formato editable) - Respeta cada plantilla
  const downloadWord = async () => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl z-50';
    toast.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generando documento Word...';
    document.body.appendChild(toast);

    try {
      const sections = [];

      // Header según plantilla seleccionada
      if (selectedTemplate === 'corporate') {
        // CORPORATE: Header centrado con fondo azul (simulado con mayúsculas y bold)
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: cvData.personalInfo.fullName.toUpperCase(),
                bold: true,
                size: 36,
                color: '2563EB' // Azul corporativo
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: cvData.personalInfo.title,
                size: 22,
                color: '2563EB'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.email} | ${cvData.personalInfo.phone} | ${cvData.personalInfo.location}`,
                size: 18
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.linkedin} | ${cvData.personalInfo.github}`,
                size: 18
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          })
        );
      } else if (selectedTemplate === 'harvard') {
        // HARVARD: Header centrado elegante con línea
        sections.push(
          new Paragraph({
            text: cvData.personalInfo.fullName,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: cvData.personalInfo.title,
                size: 22
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.email} • ${cvData.personalInfo.phone} • ${cvData.personalInfo.location}`,
                size: 18
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.linkedin} • ${cvData.personalInfo.github}`,
                size: 18
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 300, before: 50 },
            border: {
              bottom: {
                color: '999999',
                space: 1,
                style: 'single',
                size: 6
              }
            }
          }),
          new Paragraph({
            text: '',
            spacing: { after: 200 }
          })
        );
      } else if (selectedTemplate === 'minimal') {
        // MINIMAL: Header simple alineado a la izquierda
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: cvData.personalInfo.fullName,
                bold: true,
                size: 32
              })
            ],
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: cvData.personalInfo.title,
                size: 20
              })
            ],
            spacing: { after: 150 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.email} | ${cvData.personalInfo.phone} | ${cvData.personalInfo.location}`,
                size: 18
              })
            ],
            spacing: { after: 50 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${cvData.personalInfo.linkedin} | ${cvData.personalInfo.github}`,
                size: 18
              })
            ],
            spacing: { after: 400 }
          })
        );
      }

      // Resumen profesional
      if (cvData.personalInfo.summary) {
        sections.push(
          new Paragraph({
            text: 'RESUMEN PROFESIONAL',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 200 }
          }),
          new Paragraph({
            text: cvData.personalInfo.summary,
            spacing: { after: 400 }
          })
        );
      }

      // Experiencia
      sections.push(
        new Paragraph({
          text: 'EXPERIENCIA LABORAL',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 200 }
        })
      );

      cvData.experience.filter(exp => exp.enabled).forEach(exp => {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: exp.title,
                bold: true,
                size: 24
              })
            ],
            spacing: { before: 200, after: 100 }
          }),
          new Paragraph({
            text: `${exp.company} | ${exp.location}`,
            spacing: { after: 100 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: exp.period,
                italics: true
              })
            ],
            spacing: { after: 150 }
          })
        );

        exp.achievements.forEach(achievement => {
          if (achievement) {
            sections.push(
              new Paragraph({
                text: `• ${achievement}`,
                spacing: { after: 100 }
              })
            );
          }
        });

        if (exp.technologies && exp.technologies.length > 0) {
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Tecnologías: ',
                  bold: true,
                  size: 18
                }),
                new TextRun({
                  text: exp.technologies.join(', '),
                  size: 18
                })
              ],
              spacing: { after: 200 }
            })
          );
        }
      });

      // Proyectos
      const enabledProjects = cvData.projects.filter(proj => proj.enabled);
      if (enabledProjects.length > 0) {
        sections.push(
          new Paragraph({
            text: 'PROYECTOS DESTACADOS',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
          })
        );

        enabledProjects.forEach(project => {
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: project.title,
                  bold: true,
                  size: 24
                })
              ],
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: project.year ? `${project.year} - ` : '',
                  italics: true,
                  size: 18
                }),
                new TextRun({
                  text: project.description,
                  size: 20
                })
              ],
              spacing: { after: 100 }
            })
          );

          if (project.technologies && project.technologies.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Tecnologías: ',
                    bold: true,
                    size: 18
                  }),
                  new TextRun({
                    text: project.technologies.join(', '),
                    italics: true,
                    size: 18
                  })
                ],
                spacing: { after: 150 }
              })
            );
          }
        });
      }

      // Educación
      const enabledEducation = cvData.education.filter(e => e.enabled);
      if (enabledEducation.length > 0) {
        sections.push(
          new Paragraph({
            text: 'EDUCACIÓN',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
          })
        );

        enabledEducation.forEach(edu => {
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: edu.degree,
                  bold: true,
                  size: 24
                })
              ],
              spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
              text: `${edu.institution} | ${edu.location}`,
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: edu.period,
                  italics: true
                })
              ],
              spacing: { after: edu.details ? 100 : 200 }
            })
          );

          if (edu.details) {
            sections.push(
              new Paragraph({
                text: edu.details,
                spacing: { after: 200 }
              })
            );
          }
        });
      }

      // Habilidades
      sections.push(
        new Paragraph({
          text: 'HABILIDADES TÉCNICAS',
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 }
        })
      );

      if (cvData.skills.programming.length > 0) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Lenguajes: ',
                bold: true
              }),
              new TextRun({
                text: cvData.skills.programming.join(', ')
              })
            ],
            spacing: { after: 150 }
          })
        );
      }

      if (cvData.skills.frameworks.length > 0) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Frameworks: ',
                bold: true
              }),
              new TextRun({
                text: cvData.skills.frameworks.join(', ')
              })
            ],
            spacing: { after: 150 }
          })
        );
      }

      if (cvData.skills.cloud.length > 0) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Cloud & DevOps: ',
                bold: true
              }),
              new TextRun({
                text: cvData.skills.cloud.join(', ')
              })
            ],
            spacing: { after: 150 }
          })
        );
      }

      if (cvData.skills.databases.length > 0) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: 'Bases de Datos: ',
                bold: true
              }),
              new TextRun({
                text: cvData.skills.databases.join(', ')
              })
            ],
            spacing: { after: 150 }
          })
        );
      }

      // Crear documento
      const doc = new Document({
        sections: [{
          properties: {},
          children: sections
        }]
      });

      // Generar y descargar
      const blob = await Packer.toBlob(doc);
      const fileName = `${currentVersion.replace(/\s+/g, '-') || 'cv'}-${selectedTemplate}.docx`;
      saveAs(blob, fileName);

      toast.remove();
      const successToast = document.createElement('div');
      successToast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
      successToast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Documento Word descargado! Ahora puedes editarlo.';
      document.body.appendChild(successToast);
      setTimeout(() => successToast.remove(), 3000);
    } catch (error) {
      console.error('Error generando Word:', error);
      toast.remove();
      const errorToast = document.createElement('div');
      errorToast.className = 'fixed top-24 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-xl z-50';
      errorToast.innerHTML = '<i class="fas fa-exclamation-circle mr-2"></i>Error al generar el documento Word';
      document.body.appendChild(errorToast);
      setTimeout(() => errorToast.remove(), 3000);
    }
  };

  const tabs = [
    { id: 'personal', name: 'Personal', icon: 'fas fa-user' },
    { id: 'experience', name: 'Experiencia', icon: 'fas fa-briefcase' },
    { id: 'projects', name: 'Proyectos', icon: 'fas fa-folder-open' },
    { id: 'education', name: 'Educación', icon: 'fas fa-graduation-cap' },
    { id: 'skills', name: 'Skills', icon: 'fas fa-code' }
  ];

  return (
    <>
      <SEOHead
        title="Generador de CV Profesional - Crea CVs personalizados"
        description="Generador de CV con múltiples plantillas. Crea y guarda diferentes versiones adaptadas a cada puesto."
        keywords="generador cv, curriculum vitae, plantillas cv profesional"
        url="https://emersonespinoza.com/cv/generator"
      />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
        <div className="max-w-[1800px] mx-auto px-4">

          {/* Header Mejorado */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <i className="fas fa-magic mr-2"></i>
                Generador Inteligente de CVs
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Crea tu CV Perfecto
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Genera múltiples versiones de tu CV adaptadas a cada puesto en minutos
            </p>

            {currentVersion && (
              <motion.div
                className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-full px-6 py-3"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <i className="fas fa-file-alt text-green-400"></i>
                <span className="text-white font-semibold">{currentVersion}</span>
              </motion.div>
            )}
          </motion.div>

          {/* Instrucciones - Colapsable */}
          <AnimatePresence>
            {showInstructions && (
              <motion.div
                className="mb-8 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-blue-800/30 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-100 mb-2 flex items-center gap-3">
                      <i className="fas fa-info-circle text-cyan-400"></i>
                      {t('cvGenerator.instructions.title')}
                    </h2>
                    <p className="text-cyan-200/80 text-sm md:text-base">{t('cvGenerator.instructions.subtitle')}</p>
                  </div>
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="text-cyan-300 hover:text-white transition-colors p-2"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                {/* Pasos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  {/* Paso 1 */}
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black text-xl">
                        {t('cvGenerator.instructions.step1.number')}
                      </div>
                      <h3 className="text-lg font-bold text-white">{t('cvGenerator.instructions.step1.title')}</h3>
                    </div>
                    <p className="text-cyan-100/70 text-sm leading-relaxed">{t('cvGenerator.instructions.step1.description')}</p>
                  </motion.div>

                  {/* Paso 2 */}
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center text-white font-black text-xl">
                        {t('cvGenerator.instructions.step2.number')}
                      </div>
                      <h3 className="text-lg font-bold text-white">{t('cvGenerator.instructions.step2.title')}</h3>
                    </div>
                    <p className="text-cyan-100/70 text-sm leading-relaxed">{t('cvGenerator.instructions.step2.description')}</p>
                  </motion.div>

                  {/* Paso 3 */}
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-black text-xl">
                        {t('cvGenerator.instructions.step3.number')}
                      </div>
                      <h3 className="text-lg font-bold text-white">{t('cvGenerator.instructions.step3.title')}</h3>
                    </div>
                    <p className="text-cyan-100/70 text-sm leading-relaxed">{t('cvGenerator.instructions.step3.description')}</p>
                  </motion.div>
                </div>

                {/* Tips profesionales */}
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30">
                  <h4 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
                    <i className="fas fa-lightbulb"></i>
                    {t('cvGenerator.instructions.tips.title')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-start gap-2 text-cyan-100/70">
                      <i className="fas fa-check text-green-400 mt-1"></i>
                      <span>{t('cvGenerator.instructions.tips.tip1')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-cyan-100/70">
                      <i className="fas fa-check text-green-400 mt-1"></i>
                      <span>{t('cvGenerator.instructions.tips.tip2')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-cyan-100/70">
                      <i className="fas fa-check text-green-400 mt-1"></i>
                      <span>{t('cvGenerator.instructions.tips.tip3')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-cyan-100/70">
                      <i className="fas fa-check text-green-400 mt-1"></i>
                      <span>{t('cvGenerator.instructions.tips.tip4')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón para mostrar instrucciones si están ocultas */}
          {!showInstructions && (
            <motion.button
              onClick={() => setShowInstructions(true)}
              className="mb-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 hover:text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-info-circle"></i>
              {t('cvGenerator.instructions.title')}
            </motion.button>
          )}

          {/* Barra de Acciones Sticky - Mobile First */}
          <motion.div
            className="sticky top-20 z-40 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-6 sm:mb-8 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-between">

              {/* Presets */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-400 self-center px-1 sm:px-2 hidden sm:inline">Presets:</span>
                {Object.entries(jobPresets).map(([key, preset]) => (
                  <button
                    key={key}
                    onClick={() => applyJobPreset(key)}
                    className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105 text-xs sm:text-sm font-semibold shadow-lg"
                  >
                    <i className="fas fa-bolt mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">{preset.name}</span>
                    <span className="sm:hidden">{preset.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Acciones */}
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <button
                  onClick={saveVersion}
                  disabled={isSaving}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 text-xs sm:text-sm"
                >
                  <i className={`fas fa-${isSaving ? 'spinner fa-spin' : 'save'} mr-1 sm:mr-2`}></i>
                  <span className="hidden sm:inline">Guardar</span>
                </button>

                <button
                  onClick={() => setShowVersions(!showVersions)}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg relative text-xs sm:text-sm"
                >
                  <i className="fas fa-folder-open mr-1 sm:mr-2"></i>
                  <span className="hidden md:inline">Versiones</span>
                  {savedVersions.length > 0 && (
                    <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold">
                      {savedVersions.length}
                    </span>
                  )}
                </button>

                {/* Botones de descarga separados */}
                <button
                  onClick={downloadWord}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  title="Descargar en formato Word editable"
                >
                  <i className="fas fa-file-word"></i>
                  <span className="hidden lg:inline">Word</span>
                  <span className="text-xs px-1 sm:px-1.5 py-0.5 bg-white/20 rounded hidden md:inline">Editable</span>
                </button>

                <button
                  onClick={downloadPDFText}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  title="Descargar PDF con texto seleccionable"
                >
                  <i className="fas fa-file-pdf"></i>
                  <span className="hidden lg:inline">PDF</span>
                </button>

                <button
                  onClick={downloadPDFImage}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  title="Descargar PDF como imagen (diseño exacto)"
                >
                  <i className="fas fa-image"></i>
                  <span className="hidden lg:inline">IMG</span>
                </button>

                <button
                  onClick={exportToJSON}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg text-xs sm:text-sm"
                >
                  <i className="fas fa-download mr-1 sm:mr-2"></i>
                  <span className="hidden md:inline">JSON</span>
                </button>

                <label className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer text-xs sm:text-sm">
                  <i className="fas fa-upload mr-1 sm:mr-2"></i>
                  <span className="hidden md:inline">Importar</span>
                  <input type="file" accept=".json" onChange={importFromJSON} className="hidden" />
                </label>

                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all shadow-lg text-xs sm:text-sm lg:hidden"
                  title={showPreview ? 'Ocultar preview' : 'Mostrar preview'}
                >
                  <i className={`fas fa-${showPreview ? 'eye-slash' : 'eye'}`}></i>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Panel de Versiones Guardadas */}
          <AnimatePresence>
            {showVersions && savedVersions.length > 0 && (
              <motion.div
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <i className="fas fa-archive mr-3 text-purple-400"></i>
                    Versiones Guardadas ({savedVersions.length})
                  </h3>
                  <button
                    onClick={() => setShowVersions(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {savedVersions.map(version => (
                    <motion.div
                      key={version.id}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-4 border border-slate-600/50 hover:border-blue-500/50 transition-all cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => loadVersion(version)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-white group-hover:text-blue-400 transition line-clamp-2">
                            {version.name}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            <i className="fas fa-calendar mr-1"></i>
                            {new Date(version.createdAt).toLocaleDateString('es-ES', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <button
                          onClick={(e) => deleteVersion(version.id, e)}
                          className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition ml-2"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {cvTemplates[version.template]?.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-blue-400 transition">
                          Click para cargar <i className="fas fa-arrow-right ml-1"></i>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Selector de Plantilla Mejorado */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white flex items-center">
              <i className="fas fa-palette mr-3 text-purple-400"></i>
              Plantilla
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.values(cvTemplates).map(template => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`p-6 rounded-xl border-2 transition-all transform hover:scale-105 ${
                    selectedTemplate === template.id
                      ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-xl shadow-blue-500/20'
                      : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">
                      {template.id === 'harvard' && <i className="fas fa-scroll text-amber-500"></i>}
                      {template.id === 'corporate' && <i className="fas fa-briefcase text-blue-500"></i>}
                      {template.id === 'minimal' && <i className="fas fa-bolt text-yellow-400"></i>}
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">{template.name}</h4>
                    <p className="text-sm text-gray-400">{template.description}</p>
                    {selectedTemplate === template.id && (
                      <div className="mt-4 text-blue-400 font-semibold flex items-center justify-center">
                        <i className="fas fa-check-circle mr-2"></i>
                        Seleccionada
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Área de Trabajo Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Editor con Tabs Mejorados */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">

                {/* Tabs */}
                <div className="flex border-b border-slate-700/50 bg-slate-900/50">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <i className={`${tab.icon} mr-2`}></i>
                      <span className="hidden sm:inline">{tab.name}</span>
                    </button>
                  ))}
                </div>

                {/* Form Content con mejor scroll */}
                <div
                  ref={formRef}
                  className="p-6 max-h-[calc(100vh-400px)] overflow-y-auto custom-scrollbar"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <CVForm
                    activeTab={activeTab}
                    cvData={cvData}
                    setCvData={setCvData}
                  />
                </div>
              </div>
            </div>

            {/* Preview Mejorado */}
            {showPreview && (
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <i className="fas fa-eye mr-3 text-cyan-400"></i>
                      Vista Previa
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={downloadWord}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-sm flex items-center gap-1.5"
                        title="Descargar en formato Word editable"
                      >
                        <i className="fas fa-file-word"></i>
                        <span className="text-xs px-1 py-0.5 bg-white/20 rounded hidden sm:inline">Editable</span>
                      </button>
                      <button
                        onClick={downloadPDFText}
                        className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition text-sm"
                        title="Descargar PDF con texto seleccionable"
                      >
                        <i className="fas fa-file-pdf"></i>
                      </button>
                      <button
                        onClick={downloadPDFImage}
                        className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-sm"
                        title="Descargar PDF con imagen"
                      >
                        <i className="fas fa-image"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar">
                    <CVPreview
                      cvData={cvData}
                      template={selectedTemplate}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </>
  );
};

export default CVGenerator;
