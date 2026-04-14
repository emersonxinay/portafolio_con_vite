import { useState, useEffect } from 'react';
import { workExperience } from '../data/experienceData';
import { projectsData } from '../data/projectsData';
import { defaultCVData } from '../data/cvTemplateData';

export const useCVData = () => {
  // Inicializar con defaultCVData pero mapear experiencia y proyectos del portafolio
  const [cvData, setCvData] = useState(() => {
    const saved = localStorage.getItem('cvData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Mezclar con defaultCVData para asegurar que existan todas las propiedades (ej: skills)
        return {
          ...defaultCVData,
          ...parsed,
          personalInfo: { ...defaultCVData.personalInfo, ...(parsed.personalInfo || {}) },
          skills: { ...defaultCVData.skills, ...(parsed.skills || {}) }
        };
      } catch (e) {
        console.error("Error parsing saved CV data", e);
      }
    }

    return {
      ...defaultCVData,
      experience: workExperience.map(exp => ({
        id: exp.id,
        title: exp.position,
        company: exp.company,
        location: "", // No siempre disponible en workExperience
        period: exp.period,
        achievements: [exp.description], // Usar la descripción como primer logro
        technologies: exp.technologies || [],
        enabled: true
      })),
      projects: projectsData.filter(p => p.featured).map(proj => ({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        year: proj.year || "",
        technologies: proj.tech || [],
        enabled: true
      }))
    };
  });

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  const resetData = () => {
    if (window.confirm('¿Estás seguro de que quieres restablecer todos los datos a los valores por defecto del portafolio?')) {
      const reseted = {
        ...defaultCVData,
        experience: workExperience.map(exp => ({
          id: exp.id,
          title: exp.position,
          company: exp.company,
          location: "",
          period: exp.period,
          achievements: [exp.description],
          technologies: exp.technologies || [],
          enabled: true
        })),
        projects: projectsData.filter(p => p.featured).map(proj => ({
          id: proj.id,
          title: proj.title,
          description: proj.description,
          year: proj.year || "",
          technologies: proj.tech || [],
          enabled: true
        }))
      };
      setCvData(reseted);
    }
  };

  return {
    cvData,
    setCvData,
    resetData
  };
};
