import React from 'react';

const CVPreview = ({ cvData, template }) => {

  // Plantilla Harvard
  if (template === 'harvard') {
    return (
      <div className="bg-white text-gray-800 p-10 text-sm" id="cv-preview" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Header */}
        <div className="text-center border-b-2 border-gray-400 pb-5 mb-6">
          <h1 className="text-4xl font-bold uppercase mb-3 tracking-wide" style={{ letterSpacing: '0.05em' }}>
            {cvData.personalInfo.fullName}
          </h1>
          <p className="text-base text-gray-700 mb-4 font-medium">{cvData.personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <i className="fas fa-envelope"></i>
              <span>{cvData.personalInfo.email}</span>
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-phone"></i>
              <span>{cvData.personalInfo.phone}</span>
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-map-marker-alt"></i>
              <span>{cvData.personalInfo.location}</span>
            </span>
            {cvData.personalInfo.linkedin && (
              <span className="flex items-center gap-1">
                <i className="fab fa-linkedin"></i>
                <span>{cvData.personalInfo.linkedin}</span>
              </span>
            )}
            {cvData.personalInfo.github && (
              <span className="flex items-center gap-1">
                <i className="fab fa-github"></i>
                <span>{cvData.personalInfo.github}</span>
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        {cvData.summary && (
          <div className="mb-7">
            <h2 className="text-base font-bold uppercase border-b-2 border-gray-400 pb-2 mb-4 tracking-wide">
              Resumen Profesional
            </h2>
            <p className="text-justify leading-relaxed text-gray-800" style={{ lineHeight: '1.7' }}>
              {cvData.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {cvData.experience.filter(exp => exp.enabled).length > 0 && (
          <div className="mb-7">
            <h2 className="text-base font-bold uppercase border-b-2 border-gray-400 pb-2 mb-4 tracking-wide">
              Experiencia Profesional
            </h2>
            {cvData.experience.filter(exp => exp.enabled).map((exp, index) => (
              <div key={exp.id} className="mb-5 pb-4 border-b border-gray-200 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700 font-medium text-sm mt-1">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-gray-600 text-xs font-medium whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <ul className="list-disc ml-5 mt-3 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    achievement && (
                      <li key={i} className="text-justify text-gray-800" style={{ lineHeight: '1.6' }}>
                        {achievement}
                      </li>
                    )
                  ))}
                </ul>
                {exp.technologies.length > 0 && (
                  <p className="text-xs text-gray-600 mt-3">
                    <strong className="font-semibold">Tecnologías:</strong> {exp.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {cvData.projects.filter(p => p.enabled).length > 0 && (
          <div className="mb-7">
            <h2 className="text-base font-bold uppercase border-b-2 border-gray-400 pb-2 mb-4 tracking-wide">
              Proyectos Destacados
            </h2>
            {cvData.projects.filter(p => p.enabled).map((project, index) => (
              <div key={project.id} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-sm text-gray-900">{project.title}</h3>
                  <span className="text-gray-600 text-xs font-medium whitespace-nowrap ml-4">{project.year}</span>
                </div>
                <p className="text-justify mt-2 text-gray-800" style={{ lineHeight: '1.6' }}>
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <p className="text-xs text-gray-600 mt-2">
                    <strong className="font-semibold">Stack:</strong> {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {cvData.education.filter(e => e.enabled).length > 0 && (
          <div className="mb-7">
            <h2 className="text-base font-bold uppercase border-b-2 border-gray-400 pb-2 mb-4 tracking-wide">
              Educación
            </h2>
            {cvData.education.filter(e => e.enabled).map((edu, index) => (
              <div key={edu.id} className="mb-4 pb-3 border-b border-gray-200 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 text-sm mt-1">
                      {edu.institution} {edu.location && `• ${edu.location}`}
                    </p>
                  </div>
                  <span className="text-gray-600 text-xs font-medium whitespace-nowrap ml-4">{edu.period}</span>
                </div>
                {edu.details && (
                  <p className="text-xs text-gray-600 mt-2" style={{ lineHeight: '1.5' }}>
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div>
          <h2 className="text-base font-bold uppercase border-b-2 border-gray-400 pb-2 mb-4 tracking-wide">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {cvData.skills.programming.length > 0 && (
              <div>
                <p className="font-bold text-sm mb-2 text-gray-900">Lenguajes:</p>
                <p className="text-xs text-gray-700" style={{ lineHeight: '1.6' }}>
                  {cvData.skills.programming.join(', ')}
                </p>
              </div>
            )}
            {cvData.skills.frameworks.length > 0 && (
              <div>
                <p className="font-bold text-sm mb-2 text-gray-900">Frameworks:</p>
                <p className="text-xs text-gray-700" style={{ lineHeight: '1.6' }}>
                  {cvData.skills.frameworks.join(', ')}
                </p>
              </div>
            )}
            {cvData.skills.cloud.length > 0 && (
              <div>
                <p className="font-bold text-sm mb-2 text-gray-900">Cloud & DevOps:</p>
                <p className="text-xs text-gray-700" style={{ lineHeight: '1.6' }}>
                  {cvData.skills.cloud.join(', ')}
                </p>
              </div>
            )}
            {cvData.skills.databases.length > 0 && (
              <div>
                <p className="font-bold text-sm mb-2 text-gray-900">Bases de Datos:</p>
                <p className="text-xs text-gray-700" style={{ lineHeight: '1.6' }}>
                  {cvData.skills.databases.join(', ')}
                </p>
              </div>
            )}
            {cvData.skills.other.length > 0 && (
              <div className="col-span-2">
                <p className="font-bold text-sm mb-2 text-gray-900">Otras Habilidades:</p>
                <p className="text-xs text-gray-700" style={{ lineHeight: '1.6' }}>
                  {cvData.skills.other.join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Plantilla Corporate
  if (template === 'corporate') {
    return (
      <div className="bg-white text-gray-800 p-8 text-sm" id="cv-preview">
        {/* Header con color */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 -m-8 mb-6">
          <h1 className="text-3xl font-bold mb-2">{cvData.personalInfo.fullName}</h1>
          <p className="text-lg text-blue-100 mb-3">{cvData.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span><i className="fas fa-envelope mr-2"></i>{cvData.personalInfo.email}</span>
            <span><i className="fas fa-phone mr-2"></i>{cvData.personalInfo.phone}</span>
            <span><i className="fas fa-map-marker-alt mr-2"></i>{cvData.personalInfo.location}</span>
          </div>
        </div>

        {/* Summary con destaque */}
        {cvData.summary && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-justify leading-relaxed">{cvData.summary}</p>
          </div>
        )}

        {/* Experience con iconos */}
        {cvData.experience.filter(exp => exp.enabled).length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i className="fas fa-briefcase mr-2"></i>
              Experiencia Profesional
            </h2>
            {cvData.experience.filter(exp => exp.enabled).map((exp, index) => (
              <div key={exp.id} className="mb-5 pl-4 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-600 text-xs">{exp.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1 mt-2">
                  {exp.achievements.map((achievement, i) => (
                    achievement && (
                      <li key={i} className="flex items-start text-justify">
                        <i className="fas fa-angle-right text-blue-500 mr-2 mt-1"></i>
                        <span>{achievement}</span>
                      </li>
                    )
                  ))}
                </ul>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {cvData.projects.filter(p => p.enabled).length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i className="fas fa-folder-open mr-2"></i>
              Proyectos Destacados
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {cvData.projects.filter(p => p.enabled).map((project, index) => (
                <div key={project.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
                    <span className="text-gray-600 text-xs">{project.year}</span>
                  </div>
                  <p className="text-justify text-sm mb-2">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Skills en 2 columnas */}
        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {cvData.education.filter(e => e.enabled).length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <i className="fas fa-graduation-cap mr-2"></i>
                Educación
              </h2>
              {cvData.education.filter(e => e.enabled).map((edu, index) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-xs">{edu.period}</p>
                  {edu.details && <p className="text-xs text-gray-600 mt-1">{edu.details}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <i className="fas fa-code mr-2"></i>
              Habilidades
            </h2>
            {cvData.skills.programming.length > 0 && (
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Lenguajes</p>
                <div className="flex flex-wrap gap-1">
                  {cvData.skills.programming.map((skill, i) => (
                    <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            {cvData.skills.frameworks.length > 0 && (
              <div className="mb-3">
                <p className="font-semibold text-sm mb-1">Frameworks</p>
                <div className="flex flex-wrap gap-1">
                  {cvData.skills.frameworks.map((skill, i) => (
                    <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Plantilla Minimal
  if (template === 'minimal') {
    return (
      <div className="bg-white text-gray-900 p-8 text-sm font-mono" id="cv-preview">
        {/* Header minimalista */}
        <div className="border-b-2 border-black pb-3 mb-6">
          <h1 className="text-2xl font-bold mb-1">{cvData.personalInfo.fullName}</h1>
          <p className="text-sm text-gray-600">{cvData.personalInfo.title}</p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-xs mb-6">
          <div>
            <p className="font-bold mb-1">CONTACT</p>
            <p>{cvData.personalInfo.email}</p>
            <p>{cvData.personalInfo.phone}</p>
            <p>{cvData.personalInfo.location}</p>
          </div>
          <div>
            <p className="font-bold mb-1">WEB</p>
            <p>{cvData.personalInfo.linkedin}</p>
            <p>{cvData.personalInfo.github}</p>
          </div>
        </div>

        {/* Summary */}
        {cvData.summary && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-2">About</h2>
            <p className="text-justify">{cvData.summary}</p>
          </div>
        )}

        {/* Experience */}
        {cvData.experience.filter(exp => exp.enabled).length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-3">Experience</h2>
            {cvData.experience.filter(exp => exp.enabled).map((exp, index) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-bold">{exp.title}</span>
                  <span className="text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <ul className="list-none space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    achievement && <li key={i}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {cvData.projects.filter(p => p.enabled).length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase mb-3">Projects</h2>
            {cvData.projects.filter(p => p.enabled).map((project, index) => (
              <div key={project.id} className="mb-3">
                <div className="flex justify-between">
                  <span className="font-bold">{project.title}</span>
                  <span className="text-gray-600">{project.year}</span>
                </div>
                <p className="mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        <div>
          <h2 className="text-sm font-bold uppercase mb-2">Skills</h2>
          <p>{[...cvData.skills.programming, ...cvData.skills.frameworks].join(' • ')}</p>
        </div>
      </div>
    );
  }

  return <div className="p-8 text-center">Plantilla no encontrada</div>;
};

export default CVPreview;
