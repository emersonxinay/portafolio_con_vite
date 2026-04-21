import { useCallback, memo } from 'react';
import { motion } from 'framer-motion';

// Componente de Input Premium reutilizable
const InputField = memo(({ label, value, onChange, placeholder, type = "text", rows = null, icon }) => (
  <div className="mb-6 group">
    <label className="flex items-center gap-2 text-sm font-bold mb-2 text-slate-300 group-focus-within:text-blue-400 transition-colors">
      {icon && <i className={`${icon} text-xs text-blue-500/70 group-focus-within:text-blue-400`}></i>}
      {label}
    </label>
    <div className="relative">
      {rows ? (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none shadow-inner"
        />
      ) : (
        <input
          type={type}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner"
        />
      )}
      <div className="absolute inset-0 rounded-xl pointer-events-none group-focus-within:border-blue-500/20 transition-all"></div>
    </div>
  </div>
));

InputField.displayName = 'InputField';

const CVForm = ({ activeTab, cvData, setCvData }) => {

  const handleInputChange = useCallback((section, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  }, [setCvData]);

  const handleArrayItemChange = useCallback((section, index, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    }));
  }, [setCvData]);

  const handleArrayAdd = useCallback((section, newItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  }, [setCvData]);

  const handleArrayRemove = useCallback((section, index) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  }, [setCvData]);

  const toggleArrayItemEnabled = useCallback((section, index) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item
      )
    }));
  }, [setCvData]);

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  // FORMULARIO: Información Personal
  if (activeTab === 'personal') {
    return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-2">
        <header className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <i className="fas fa-user-circle text-blue-400"></i>
            Información de Contacto
          </h3>
          <p className="text-blue-200/60 text-sm mt-1">Estos datos aparecerán en el encabezado de tu CV.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <InputField
            label="Nombre Completo"
            value={cvData.personalInfo.fullName}
            onChange={(val) => handleInputChange('personalInfo', 'fullName', val)}
            placeholder="Ej: Emerson Espinoza Aguirre"
            icon="fas fa-user"
          />

          <InputField
            label="Título Profesional"
            value={cvData.personalInfo.title}
            onChange={(val) => handleInputChange('personalInfo', 'title', val)}
            placeholder="Ej: Senior Software Engineer & Tech Lead"
            icon="fas fa-briefcase"
          />

          <InputField
            label="Email"
            type="email"
            value={cvData.personalInfo.email}
            onChange={(val) => handleInputChange('personalInfo', 'email', val)}
            placeholder="tu@email.com"
            icon="fas fa-envelope"
          />

          <InputField
            label="Teléfono"
            value={cvData.personalInfo.phone}
            onChange={(val) => handleInputChange('personalInfo', 'phone', val)}
            placeholder="+51 999 999 999"
            icon="fas fa-phone"
          />

          <InputField
            label="Ubicación"
            value={cvData.personalInfo.location}
            onChange={(val) => handleInputChange('personalInfo', 'location', val)}
            placeholder="Santiago, Chile"
            icon="fas fa-map-marker-alt"
          />

          <InputField
            label="LinkedIn (URL)"
            value={cvData.personalInfo.linkedin}
            onChange={(val) => handleInputChange('personalInfo', 'linkedin', val)}
            placeholder="linkedin.com/in/tu-perfil"
            icon="fab fa-linkedin"
          />

          <InputField
            label="GitHub (URL)"
            value={cvData.personalInfo.github}
            onChange={(val) => handleInputChange('personalInfo', 'github', val)}
            placeholder="github.com/tu-usuario"
            icon="fab fa-github"
          />

          <InputField
            label="Website (URL)"
            value={cvData.personalInfo.website}
            onChange={(val) => handleInputChange('personalInfo', 'website', val)}
            placeholder="tuweb.com"
            icon="fas fa-globe"
          />
        </div>

        <InputField
          label="Resumen Profesional"
          value={cvData.summary}
          onChange={(val) => setCvData(prev => ({ ...prev, summary: val }))}
          placeholder="Describe tu experiencia, logros clave y especialización técnica..."
          rows={6}
          icon="fas fa-quote-left"
        />
      </motion.div>
    );
  }

  // FORMULARIO: Experiencia
  if (activeTab === 'experience') {
    return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        <header className="flex justify-between items-center mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-3">
              <i className="fas fa-history text-emerald-400"></i>
              Experiencia Laboral
            </h3>
            <p className="text-emerald-200/60 text-sm mt-1">Gestiona tus roles y logros profesionales.</p>
          </div>
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
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95"
          >
            <i className="fas fa-plus"></i>
            Añadir
          </button>
        </header>

        <div className="space-y-6">
          {cvData.experience.map((exp, index) => (
            <motion.div
              layout
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`group p-6 rounded-3xl border transition-all ${
                exp.enabled
                  ? 'border-slate-700/50 bg-slate-800/20 focus-within:border-emerald-500/30'
                  : 'border-slate-800 bg-slate-900/40 grayscale opacity-60'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-emerald-400 font-black">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-white text-lg">{exp.company || 'Nueva Empresa'}</h4>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleArrayItemEnabled('experience', index)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      exp.enabled ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20' : 'bg-slate-700/50 text-slate-400 border border-slate-600/30'
                    }`}
                  >
                    <i className={`fas fa-${exp.enabled ? 'eye' : 'eye-slash'}`}></i>
                    {exp.enabled ? 'Visible' : 'Oculto'}
                  </button>
                  <button
                    onClick={() => handleArrayRemove('experience', index)}
                    className="p-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <InputField
                  label="Cargo / Posición"
                  value={exp.title}
                  onChange={(val) => handleArrayItemChange('experience', index, 'title', val)}
                  placeholder="Senior Software Engineer"
                  icon="fas fa-id-badge"
                />
                <InputField
                  label="Empresa"
                  value={exp.company}
                  onChange={(val) => handleArrayItemChange('experience', index, 'company', val)}
                  placeholder="Nombre de la Compañía"
                  icon="fas fa-building"
                />
                <InputField
                  label="Ubicación"
                  value={exp.location}
                  onChange={(val) => handleArrayItemChange('experience', index, 'location', val)}
                  placeholder="Remoto / Ciudad"
                  icon="fas fa-map-pin"
                />
                <InputField
                  label="Período"
                  value={exp.period}
                  onChange={(val) => handleArrayItemChange('experience', index, 'period', val)}
                  placeholder="Ene 2020 - Dic 2023"
                  icon="fas fa-calendar"
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-bold mb-2 text-slate-300">
                  <i className="fas fa-list-ul text-xs text-emerald-500/70"></i>
                  Logros y Responsabilidades (uno por línea)
                </label>
                <textarea
                  value={exp.achievements.join('\n')}
                  onChange={(e) => handleArrayItemChange('experience', index, 'achievements', e.target.value.split('\n'))}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none shadow-inner text-sm leading-relaxed"
                  placeholder="Lideré el equipo de backend...&#10;Reduje los costos de infraestructura en un 40%..."
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold mb-2 text-slate-300">
                  <i className="fas fa-tags text-xs text-emerald-500/70"></i>
                  Tecnologías clave (separadas por coma)
                </label>
                <input
                  value={exp.technologies.join(', ')}
                  onChange={(e) => handleArrayItemChange('experience', index, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                  className="w-full px-4 py-3 bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all shadow-inner text-sm"
                  placeholder="Node.js, AWS, PostgreSQL, Terraform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // FORMULARIO: Proyectos
  if (activeTab === 'projects') {
    return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        <header className="flex justify-between items-center mb-4 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-3">
              <i className="fas fa-rocket text-indigo-400"></i>
              Proyectos Destacados
            </h3>
            <p className="text-indigo-200/60 text-sm mt-1">Muestra tus mejores trabajos personales.</p>
          </div>
          <button
            onClick={() => handleArrayAdd('projects', {
              id: Date.now(),
              title: '',
              description: '',
              year: '',
              technologies: [],
              liveUrl: '',
              enabled: true
            })}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95"
          >
            <i className="fas fa-plus"></i>
            Añadir
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {cvData.projects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              className={`p-6 rounded-3xl border transition-all ${
                project.enabled ? 'border-slate-700/50 bg-slate-800/20 shadow-xl' : 'border-slate-800 bg-slate-900/40 opacity-60 grayscale'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <input
                  value={project.title}
                  onChange={(e) => handleArrayItemChange('projects', index, 'title', e.target.value)}
                  className="bg-transparent text-xl font-black text-white focus:outline-none focus:text-indigo-400 transition-colors w-2/3"
                  placeholder="Nombre del Proyecto"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleArrayItemEnabled('projects', index)}
                    className={`p-2 rounded-lg transition-all ${project.enabled ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20' : 'text-slate-500 bg-slate-800/50 border border-slate-700'}`}
                  >
                    <i className={`fas fa-${project.enabled ? 'eye' : 'eye-slash'}`}></i>
                  </button>
                  <button
                    onClick={() => handleArrayRemove('projects', index)}
                    className="p-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>

              <InputField
                label="Descripción Breve"
                value={project.description}
                onChange={(val) => handleArrayItemChange('projects', index, 'description', val)}
                rows={3}
                placeholder="Describe el impacto y el stack tecnológico..."
                icon="fas fa-align-left"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <InputField
                  label="Año / Período"
                  value={project.year}
                  onChange={(val) => handleArrayItemChange('projects', index, 'year', val)}
                  placeholder="Ej: 2023"
                  icon="fas fa-clock"
                />
                <InputField
                  label="Tecnologías (separadas por coma)"
                  value={project.technologies.join(', ')}
                  onChange={(val) => handleArrayItemChange('projects', index, 'technologies', val.split(',').map(t => t.trim()))}
                  placeholder="Rust, WebAssembly, AWS"
                  icon="fas fa-microchip"
                />
              </div>
              <InputField
                label="URL del Proyecto (opcional)"
                value={project.liveUrl || ''}
                onChange={(val) => handleArrayItemChange('projects', index, 'liveUrl', val)}
                placeholder="https://miproyecto.com"
                icon="fas fa-link"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // FORMULARIO: Educación
  if (activeTab === 'education') {
    return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        <header className="flex justify-between items-center mb-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-3">
              <i className="fas fa-graduation-cap text-purple-400"></i>
              Formación Académica
            </h3>
            <p className="text-purple-200/60 text-sm mt-1">Títulos, cursos y certificaciones.</p>
          </div>
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
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-purple-900/20 transition-all hover:scale-105 active:scale-95"
          >
            <i className="fas fa-plus"></i>
            Añadir
          </button>
        </header>

        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <motion.div
              layout
              key={edu.id}
              className={`p-6 rounded-3xl border transition-all ${
                edu.enabled ? 'border-slate-700/50 bg-slate-800/20' : 'border-slate-800 bg-slate-900/40 grayscale opacity-60'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-white text-lg">Educación {index + 1}</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleArrayItemEnabled('education', index)}
                    className={`p-2 rounded-lg ${edu.enabled ? 'text-purple-400 bg-purple-400/10' : 'text-slate-500 bg-slate-800'}`}
                  >
                    <i className={`fas fa-${edu.enabled ? 'eye' : 'eye-slash'}`}></i>
                  </button>
                  <button
                    onClick={() => handleArrayRemove('education', index)}
                    className="p-2 bg-red-400/10 text-red-400 rounded-lg hover:bg-red-400 transition-colors"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <InputField
                  label="Título o Grado"
                  value={edu.degree}
                  onChange={(val) => handleArrayItemChange('education', index, 'degree', val)}
                  placeholder="Ej: Ingeniero de Sistemas"
                />
                <InputField
                  label="Institución"
                  value={edu.institution}
                  onChange={(val) => handleArrayItemChange('education', index, 'institution', val)}
                  placeholder="Ej: Universidad Nacional"
                />
                <InputField
                  label="Ubicación"
                  value={edu.location}
                  onChange={(val) => handleArrayItemChange('education', index, 'location', val)}
                  placeholder="Huánuco, Perú"
                />
                <InputField
                  label="Período"
                  value={edu.period}
                  onChange={(val) => handleArrayItemChange('education', index, 'period', val)}
                  placeholder="2013-2018"
                />
              </div>

              <InputField
                label="Detalles adicionales (opcional)"
                value={edu.details}
                onChange={(val) => handleArrayItemChange('education', index, 'details', val)}
                placeholder="Egresado, Mención honrosa..."
                rows={2}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // FORMULARIO: Habilidades
  if (activeTab === 'skills') {
    return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
        <header className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <i className="fas fa-code text-amber-400"></i>
            Habilidades Técnicas
          </h3>
          <p className="text-amber-200/60 text-sm mt-1">Organiza tu stack tecnológico para cada perfil.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <InputField
            label="Lenguajes de Programación"
            value={cvData.skills.programming.join(', ')}
            onChange={(val) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, programming: val.split(',').map(s => s.trim()) }
            }))}
            placeholder="Node.js, TypeScript, Rust, Python"
            icon="fas fa-laptop-code"
          />

          <InputField
            label="Frameworks / Librerías"
            value={cvData.skills.frameworks.join(', ')}
            onChange={(val) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, frameworks: val.split(',').map(s => s.trim()) }
            }))}
            placeholder="React, NestJS, Express, FastAPI"
            icon="fas fa-cubes"
          />

          <InputField
            label="Cloud / DevOps"
            value={cvData.skills.cloud.join(', ')}
            onChange={(val) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, cloud: val.split(',').map(s => s.trim()) }
            }))}
            placeholder="Azure, GCP, Docker, Kubernetes, CI/CD"
            icon="fas fa-cloud-upload-alt"
          />

          <InputField
            label="Bases de Datos"
            value={cvData.skills.databases.join(', ')}
            onChange={(val) => setCvData(prev => ({
              ...prev,
              skills: { ...prev.skills, databases: val.split(',').map(s => s.trim()) }
            }))}
            placeholder="PostgreSQL, Redis, MongoDB, SQL Server"
            icon="fas fa-database"
          />
        </div>

        <InputField
          label="Otras Habilidades / Soft Skills"
          value={cvData.skills.other.join(', ')}
          onChange={(val) => setCvData(prev => ({
            ...prev,
            skills: { ...prev.skills, other: val.split(',').map(s => s.trim()) }
          }))}
          placeholder="Liderazgo técnico, Agile, Mentoring, Inglés Técnico"
          icon="fas fa-brain"
          rows={3}
        />
      </motion.div>
    );
  }

  return null;
};

export default CVForm;
