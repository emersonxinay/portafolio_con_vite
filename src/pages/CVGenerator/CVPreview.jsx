import React from 'react';

const CVPreview = ({ cvData, template }) => {

  // Plantilla Harvard (Académica/Tradicional)
  if (template === 'harvard') {
    return (
      <div className="bg-white text-gray-900 p-12 text-sm leading-relaxed" id="cv-preview" style={{ fontFamily: '"Libre Baskerville", Georgia, serif' }}>
        {/* Header */}
        <header className="text-center border-b-2 border-gray-900 pb-6 mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-[0.1em] mb-2">
            {cvData.personalInfo.fullName}
          </h1>
          <p className="text-sm font-semibold text-gray-700 tracking-wide mb-4">
            {cvData.personalInfo.title}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-gray-600 font-medium">
            <span>{cvData.personalInfo.email}</span>
            <span>•</span>
            <span>{cvData.personalInfo.phone}</span>
            <span>•</span>
            <span>{cvData.personalInfo.location}</span>
            {cvData.personalInfo.linkedin && (
              <>
                <span>•</span>
                <span>{cvData.personalInfo.linkedin}</span>
              </>
            )}
            {cvData.personalInfo.github && (
              <>
                <span>•</span>
                <span>{cvData.personalInfo.github}</span>
              </>
            )}
          </div>
        </header>

        {/* Summary */}
        {cvData.summary && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase border-b border-gray-900 mb-3 pb-1 tracking-wider">
              Resumen Profesional
            </h2>
            <p className="text-justify indent-8 text-gray-800">
              {cvData.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {cvData.experience.filter(exp => exp.enabled).length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase border-b border-gray-900 mb-4 pb-1 tracking-wider">
              Experiencia Profesional
            </h2>
            {cvData.experience.filter(exp => exp.enabled).map((exp) => (
              <div key={exp.id} className="mb-6 last:mb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-base text-black">{exp.title}</h3>
                  <span className="text-xs font-bold text-gray-700">{exp.period}</span>
                </div>
                <div className="flex justify-between items-baseline mb-2 italic text-gray-700">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="text-xs">{exp.location}</span>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-gray-800">
                  {exp.achievements.map((achievement, i) => (
                    achievement && <li key={i} className="pl-1">{achievement}</li>
                  ))}
                </ul>
                {exp.technologies && exp.technologies.length > 0 && (
                  <p className="text-[11px] text-gray-600 mt-2">
                    <span className="font-bold uppercase tracking-tighter">Stack:</span> {exp.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {cvData.projects.filter(p => p.enabled).length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase border-b border-gray-900 mb-4 pb-1 tracking-wider">
              Proyectos Destacados
            </h2>
            {cvData.projects.filter(p => p.enabled).map((project) => (
              <div key={project.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-sm text-black">{project.title}</h3>
                  <span className="text-xs font-bold text-gray-700">{project.year}</span>
                </div>
                <p className="text-gray-800 text-justify mb-1">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-[10px] text-gray-500 italic">
                    Tecnologías: {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {cvData.education.filter(e => e.enabled).length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase border-b border-gray-900 mb-4 pb-1 tracking-wider">
              Educación
            </h2>
            {cvData.education.filter(e => e.enabled).map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-xs font-bold text-gray-700">{edu.period}</span>
                </div>
                <p className="text-gray-700 font-medium italic">{edu.institution} • {edu.location}</p>
                {edu.details && <p className="text-xs text-gray-600 mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Skills Grid */}
        <section>
          <h2 className="text-sm font-bold uppercase border-b border-gray-900 mb-4 pb-1 tracking-wider">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[
              { label: 'Lenguajes', list: cvData?.skills?.programming || [] },
              { label: 'Frameworks', list: cvData?.skills?.frameworks || [] },
              { label: 'Cloud & DevOps', list: cvData?.skills?.cloud || [] },
              { label: 'Bases de Datos', list: cvData?.skills?.databases || [] }
            ].map((section, idx) => (
              section.list?.length > 0 && (
                <div key={idx} className="flex flex-col gap-1">
                  <p className="font-bold text-[11px] uppercase tracking-wide text-black border-b border-gray-200">{section.label}</p>
                  <p className="text-gray-700 text-xs leading-normal">{section.list.join(', ')}</p>
                </div>
              )
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Plantilla Corporate (Moderna/Eficiente)
  if (template === 'corporate') {
    return (
      <div className="bg-white text-slate-800 p-0 text-sm" id="cv-preview" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {/* Header con gradiente suave */}
        <header className="bg-slate-900 text-white p-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 uppercase">{cvData.personalInfo.fullName}</h1>
          <p className="text-xl font-medium text-blue-400 mb-6 uppercase tracking-widest">{cvData.personalInfo.title}</p>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] font-semibold opacity-90">
            <span className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-400"></i> {cvData.personalInfo.email}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-phone text-blue-400"></i> {cvData.personalInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-400"></i> {cvData.personalInfo.location}
            </span>
          </div>
        </header>

        <div className="p-10 grid grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="col-span-8 space-y-8">
            {/* Summary */}
            {cvData.summary && (
              <section>
                <h2 className="text-lg font-black text-slate-900 border-l-4 border-blue-600 pl-4 mb-4 uppercase tracking-tighter">
                  Perfil Profesional
                </h2>
                <p className="text-justify leading-relaxed text-slate-700 font-medium">
                  {cvData.summary}
                </p>
              </section>
            )}

            {/* Experience */}
            {cvData.experience.filter(exp => exp.enabled).length > 0 && (
              <section>
                <h2 className="text-lg font-black text-slate-900 border-l-4 border-blue-600 pl-4 mb-4 uppercase tracking-tighter">
                  Experiencia Relevante
                </h2>
                <div className="space-y-8">
                  {cvData.experience.filter(exp => exp.enabled).map((exp) => (
                    <div key={exp.id} className="relative pl-2">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-extrabold text-blue-700 text-base">{exp.title}</h3>
                          <p className="font-black text-slate-800 text-sm mt-0.5 uppercase tracking-wide">{exp.company}</p>
                        </div>
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-xs font-black whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {exp.achievements.map((item, i) => (
                          item && (
                            <li key={i} className="flex items-start text-justify text-slate-700 leading-snug">
                              <span className="text-blue-600 mr-2 mt-1">●</span>
                              <span>{item}</span>
                            </li>
                          )
                        ))}
                      </ul>
                      {exp.technologies.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Side Column */}
          <div className="col-span-4 space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-lg font-black text-slate-900 border-l-4 border-blue-600 pl-4 mb-4 uppercase tracking-tighter">
                Skills
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Backend', list: cvData?.skills?.programming || [] },
                  { label: 'Frameworks', list: cvData?.skills?.frameworks || [] },
                  { label: 'Cloud & Ops', list: cvData?.skills?.cloud || [] },
                  { label: 'Bases de Datos', list: cvData?.skills?.databases || [] }
                ].map((s, i) => (
                  s.list?.length > 0 && (
                    <div key={i}>
                      <p className="text-[10px] font-black text-blue-600 uppercase mb-1 tracking-widest">{s.label}</p>
                      <div className="flex flex-wrap gap-1">
                        {s.list.map((item, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[11px] font-semibold">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </section>

            {/* Education */}
            {cvData.education.filter(e => e.enabled).length > 0 && (
              <section>
                <h2 className="text-lg font-black text-slate-900 border-l-4 border-blue-600 pl-4 mb-4 uppercase tracking-tighter">
                  Formación
                </h2>
                <div className="space-y-5">
                  {cvData.education.filter(e => e.enabled).map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-extrabold text-slate-900 text-sm leading-tight">{edu.degree}</h3>
                      <p className="text-blue-700 font-bold text-[12px]">{edu.institution}</p>
                      <p className="text-slate-500 font-bold text-[10px] uppercase mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Proyectos */}
            {cvData.projects.filter(p => p.enabled).length > 0 && (
              <section>
                <h2 className="text-lg font-black text-slate-900 border-l-4 border-blue-600 pl-4 mb-4 uppercase tracking-tighter">
                  Proyectos
                </h2>
                <div className="space-y-4">
                  {cvData.projects.filter(p => p.enabled).map((project) => (
                    <div key={project.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <h3 className="font-black text-slate-800 text-[12px] uppercase mb-1">{project.title}</h3>
                      <p className="text-[11px] text-slate-600 leading-tight line-clamp-3">{project.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Plantilla Minimal (Tech/Startup)
  if (template === 'minimal') {
    return (
      <div className="bg-white text-[#111] p-12 text-[13px] font-['JetBrains_Mono',monospace]" id="cv-preview">
        <header className="mb-12">
          <h1 className="text-4xl font-black mb-2 tracking-tighter">{cvData.personalInfo.fullName}</h1>
          <div className="flex gap-4 text-gray-500 font-bold uppercase text-[10px]">
             <span>{cvData.personalInfo.title}</span>
             <span>//</span>
             <span>{cvData.personalInfo.location}</span>
          </div>
          <div className="mt-4 flex gap-4 text-[10px] font-bold">
            <a href={`mailto:${cvData.personalInfo.email}`} className="text-blue-600 underline">EMAIL</a>
            <a href={`https://${cvData.personalInfo.linkedin}`} className="text-blue-600 underline">LINKEDIN</a>
            <a href={`https://${cvData.personalInfo.github}`} className="text-blue-600 underline">GITHUB</a>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-xs font-black mb-4 border-b-2 border-black pb-1 inline-block uppercase">01. Summary</h2>
          <p className="max-w-3xl leading-relaxed">{cvData.summary}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xs font-black mb-6 border-b-2 border-black pb-1 inline-block uppercase">02. Experience</h2>
          <div className="space-y-8">
            {cvData.experience.filter(exp => exp.enabled).map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-black text-base">{exp.title} <span className="text-gray-400 font-normal">@ {exp.company}</span></h3>
                  <span className="text-[11px] font-bold text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-1.5 opacity-90">
                  {exp.achievements.map((item, i) => (
                    item && <li key={i} className="flex gap-3">
                      <span className="text-blue-600">»</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xs font-black mb-6 border-b-2 border-black pb-1 inline-block uppercase">03. Stack</h2>
          <p className="font-bold leading-loose text-blue-700">
            {[...(cvData?.skills?.programming || []), ...(cvData?.skills?.frameworks || []), ...(cvData?.skills?.cloud || [])].join(' | ')}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-black mb-4 border-b-2 border-black pb-1 inline-block uppercase">04. Education</h2>
          <div className="space-y-4">
            {cvData.education.filter(e => e.enabled).map((edu) => (
              <div key={edu.id}>
                <p className="font-black">{edu.degree}</p>
                <p className="text-gray-500 text-xs">{edu.institution} // {edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return <div className="p-12 text-center text-slate-400 font-bold">Selecciona una plantilla para visualizar tu CV.</div>;
};

export default CVPreview;
