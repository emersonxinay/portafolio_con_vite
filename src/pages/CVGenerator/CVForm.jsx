import React from 'react';

const CVForm = ({ activeTab, cvData, setCvData }) => {

  const handleInputChange = (section, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayItemChange = (section, index, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleArrayAdd = (section, newItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const handleArrayRemove = (section, index) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const toggleArrayItemEnabled = (section, index) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item
      )
    }));
  };

  // Componente de Input reutilizable
  const InputField = ({ label, value, onChange, placeholder, type = "text", rows = null }) => (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2 text-gray-200">{label}</label>
      {rows ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );

  // FORMULARIO: Información Personal
  if (activeTab === 'personal') {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4 text-cyan-400">Información Personal</h3>

        <InputField
          label="Nombre Completo"
          value={cvData.personalInfo.fullName}
          onChange={(val) => handleInputChange('personalInfo', 'fullName', val)}
          placeholder="Ej: Emerson Espinoza Aguirre"
        />

        <InputField
          label="Título Profesional"
          value={cvData.personalInfo.title}
          onChange={(val) => handleInputChange('personalInfo', 'title', val)}
          placeholder="Ej: Senior Software Engineer & Tech Lead"
        />

        <InputField
          label="Email"
          type="email"
          value={cvData.personalInfo.email}
          onChange={(val) => handleInputChange('personalInfo', 'email', val)}
          placeholder="tu@email.com"
        />

        <InputField
          label="Teléfono"
          value={cvData.personalInfo.phone}
          onChange={(val) => handleInputChange('personalInfo', 'phone', val)}
          placeholder="+51 999 999 999"
        />

        <InputField
          label="Ubicación"
          value={cvData.personalInfo.location}
          onChange={(val) => handleInputChange('personalInfo', 'location', val)}
          placeholder="Santiago, Chile"
        />

        <InputField
          label="LinkedIn"
          value={cvData.personalInfo.linkedin}
          onChange={(val) => handleInputChange('personalInfo', 'linkedin', val)}
          placeholder="linkedin.com/in/tu-perfil"
        />

        <InputField
          label="GitHub"
          value={cvData.personalInfo.github}
          onChange={(val) => handleInputChange('personalInfo', 'github', val)}
          placeholder="github.com/tu-usuario"
        />

        <InputField
          label="Website"
          value={cvData.personalInfo.website}
          onChange={(val) => handleInputChange('personalInfo', 'website', val)}
          placeholder="tuweb.com"
        />

        <InputField
          label="Resumen Profesional"
          value={cvData.summary}
          onChange={(val) => setCvData(prev => ({ ...prev, summary: val }))}
          placeholder="Describe tu experiencia y especialización..."
          rows={5}
        />
      </div>
    );
  }

  // FORMULARIO: Experiencia
  if (activeTab === 'experience') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-cyan-400">Experiencia Laboral</h3>
          <button
            onClick={() => handleArrayAdd('experience', {
              id: Date.now(),
              title: '',
              company: '',
              location: '',
              period: '',
              achievements: [''],
              technologies: [],
              enabled: true
            })}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            <i className="fas fa-plus mr-2"></i>
            Agregar Experiencia
          </button>
        </div>

        {cvData.experience.map((exp, index) => (
          <div
            key={exp.id}
            className={`p-4 rounded-lg border-2 ${
              exp.enabled ? 'border-green-500 bg-slate-700/30' : 'border-gray-600 bg-slate-800/30 opacity-50'
            }`}
          >
            <div className="flex justify-between mb-4">
              <h4 className="font-bold">Experiencia {index + 1}</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleArrayItemEnabled('experience', index)}
                  className={`px-3 py-1 rounded text-sm ${
                    exp.enabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  <i className={`fas fa-${exp.enabled ? 'eye' : 'eye-slash'} mr-1`}></i>
                  {exp.enabled ? 'Visible' : 'Oculto'}
                </button>
                <button
                  onClick={() => handleArrayRemove('experience', index)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <InputField
              label="Cargo"
              value={exp.title}
              onChange={(val) => handleArrayItemChange('experience', index, 'title', val)}
              placeholder="Senior Software Engineer"
            />

            <InputField
              label="Empresa"
              value={exp.company}
              onChange={(val) => handleArrayItemChange('experience', index, 'company', val)}
              placeholder="Nombre de la Empresa"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Ubicación"
                value={exp.location}
                onChange={(val) => handleArrayItemChange('experience', index, 'location', val)}
                placeholder="Santiago, Chile"
              />

              <InputField
                label="Período"
                value={exp.period}
                onChange={(val) => handleArrayItemChange('experience', index, 'period', val)}
                placeholder="Ene 2020 - Presente"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-200">Logros (uno por línea)</label>
              <textarea
                value={exp.achievements.join('\n')}
                onChange={(e) => handleArrayItemChange('experience', index, 'achievements', e.target.value.split('\n'))}
                rows={5}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="Logré X resultado&#10;Lideré Y equipo&#10;Implementé Z sistema"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-200">Tecnologías (separadas por coma)</label>
              <input
                value={exp.technologies.join(', ')}
                onChange={(e) => handleArrayItemChange('experience', index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="React, Python, Docker"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // FORMULARIO: Proyectos
  if (activeTab === 'projects') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-cyan-400">Proyectos Destacados</h3>
          <button
            onClick={() => handleArrayAdd('projects', {
              id: Date.now(),
              title: '',
              description: '',
              year: '',
              technologies: [],
              enabled: true
            })}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            <i className="fas fa-plus mr-2"></i>
            Agregar Proyecto
          </button>
        </div>

        {cvData.projects.map((project, index) => (
          <div
            key={project.id}
            className={`p-4 rounded-lg border-2 ${
              project.enabled ? 'border-green-500 bg-slate-700/30' : 'border-gray-600 bg-slate-800/30 opacity-50'
            }`}
          >
            <div className="flex justify-between mb-4">
              <h4 className="font-bold">Proyecto {index + 1}</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleArrayItemEnabled('projects', index)}
                  className={`px-3 py-1 rounded text-sm ${
                    project.enabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  <i className={`fas fa-${project.enabled ? 'eye' : 'eye-slash'} mr-1`}></i>
                  {project.enabled ? 'Visible' : 'Oculto'}
                </button>
                <button
                  onClick={() => handleArrayRemove('projects', index)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <InputField
              label="Nombre del Proyecto"
              value={project.title}
              onChange={(val) => handleArrayItemChange('projects', index, 'title', val)}
              placeholder="Mi Proyecto Increíble"
            />

            <InputField
              label="Descripción"
              value={project.description}
              onChange={(val) => handleArrayItemChange('projects', index, 'description', val)}
              rows={3}
              placeholder="Descripción detallada del proyecto..."
            />

            <InputField
              label="Año/Período"
              value={project.year}
              onChange={(val) => handleArrayItemChange('projects', index, 'year', val)}
              placeholder="2024 o 2022-2024"
            />

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-200">Tecnologías (separadas por coma)</label>
              <input
                value={project.technologies.join(', ')}
                onChange={(e) => handleArrayItemChange('projects', index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="React, Python, PostgreSQL"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // FORMULARIO: Educación
  if (activeTab === 'education') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-cyan-400">Educación y Certificaciones</h3>
          <button
            onClick={() => handleArrayAdd('education', {
              id: Date.now(),
              degree: '',
              institution: '',
              location: '',
              period: '',
              details: '',
              enabled: true
            })}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            <i className="fas fa-plus mr-2"></i>
            Agregar Educación
          </button>
        </div>

        {cvData.education.map((edu, index) => (
          <div
            key={edu.id}
            className={`p-4 rounded-lg border-2 ${
              edu.enabled ? 'border-green-500 bg-slate-700/30' : 'border-gray-600 bg-slate-800/30 opacity-50'
            }`}
          >
            <div className="flex justify-between mb-4">
              <h4 className="font-bold">Educación {index + 1}</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleArrayItemEnabled('education', index)}
                  className={`px-3 py-1 rounded text-sm ${
                    edu.enabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
                  }`}
                >
                  <i className={`fas fa-${edu.enabled ? 'eye' : 'eye-slash'} mr-1`}></i>
                </button>
                <button
                  onClick={() => handleArrayRemove('education', index)}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>

            <InputField
              label="Título/Grado"
              value={edu.degree}
              onChange={(val) => handleArrayItemChange('education', index, 'degree', val)}
              placeholder="Ingeniero de Sistemas"
            />

            <InputField
              label="Institución"
              value={edu.institution}
              onChange={(val) => handleArrayItemChange('education', index, 'institution', val)}
              placeholder="Universidad Nacional"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Ubicación"
                value={edu.location}
                onChange={(val) => handleArrayItemChange('education', index, 'location', val)}
                placeholder="Lima, Perú"
              />

              <InputField
                label="Período"
                value={edu.period}
                onChange={(val) => handleArrayItemChange('education', index, 'period', val)}
                placeholder="2013-2018"
              />
            </div>

            <InputField
              label="Detalles adicionales"
              value={edu.details}
              onChange={(val) => handleArrayItemChange('education', index, 'details', val)}
              placeholder="Título reconocido por SUNEDU"
            />
          </div>
        ))}
      </div>
    );
  }

  // FORMULARIO: Habilidades
  if (activeTab === 'skills') {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4 text-cyan-400">Habilidades Técnicas</h3>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-200">Lenguajes de Programación (separados por coma)</label>
          <input
            value={cvData.skills.programming.join(', ')}
            onChange={(e) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, programming: e.target.value.split(',').map(s => s.trim()) }
            }))}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Python, JavaScript, TypeScript"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-200">Frameworks (separados por coma)</label>
          <input
            value={cvData.skills.frameworks.join(', ')}
            onChange={(e) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, frameworks: e.target.value.split(',').map(s => s.trim()) }
            }))}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="React, Flask, FastAPI"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-200">Cloud & DevOps (separados por coma)</label>
          <input
            value={cvData.skills.cloud.join(', ')}
            onChange={(e) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, cloud: e.target.value.split(',').map(s => s.trim()) }
            }))}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Docker, AWS, Kubernetes"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-200">Bases de Datos (separadas por coma)</label>
          <input
            value={cvData.skills.databases.join(', ')}
            onChange={(e) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, databases: e.target.value.split(',').map(s => s.trim()) }
            }))}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="PostgreSQL, MongoDB, MySQL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-200">Otras Habilidades (separadas por coma)</label>
          <input
            value={cvData.skills.other.join(', ')}
            onChange={(e) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, other: e.target.value.split(',').map(s => s.trim()) }
            }))}
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Machine Learning, Data Science, Leadership"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default CVForm;
