import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/Title';
import { projectsData } from '../../../data/projectsData';

const ProjectsSimple = () => {
  const { t } = useTranslation(['translation']);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = projectsData.map(project => ({
    ...project,
    icon: project.id === 1 ? '' : project.id === 2 ? '' : project.id === 3 ? '' : '',
    gradient: project.id === 1 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
      project.id === 2 ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
        project.id === 3 ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
          'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    metrics: project.id === 1 ? { users: '1.2K+', performance: '98%', uptime: '99.9%' } :
      project.id === 2 ? { orders: '5K+', efficiency: '+70%', rating: '4.9/5' } :
        project.id === 3 ? { artists: '800+', streams: '15K', engagement: '92%' } :
          { students: '500+', courses: '25+', completion: '87%' }
  }));

  const categories = [
    { id: 'all', name: t('projects.categories.all'), icon: '' },
    { id: 'ecommerce', name: t('projects.categories.ecommerce'), icon: '' },
    { id: 'web', name: t('projects.categories.web'), icon: '' },
    { id: 'social', name: t('projects.categories.social'), icon: '' },
    { id: 'saas', name: t('projects.categories.saas'), icon: '' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  const openProject = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      position: 'relative',
      borderTop: '1px solid rgba(148, 163, 184, 0.2)',
      borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
    }}>
      {/* Geometric Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px),
          linear-gradient(180deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }}></div>

      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          padding: '40px',
          border: '2px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '20px',
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 24px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '50px',
            background: 'rgba(59, 130, 246, 0.1)',
            color: '#60a5fa',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            {t('portfolio')}
          </div>
          <Title title={t('projects.title')} />
          <p style={{
            fontSize: '20px',
            color: 'rgba(148, 163, 184, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Categories */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '60px',
          padding: '24px',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '16px',
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(10px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s'
        }}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedFilter(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                borderRadius: '12px',
                border: selectedFilter === category.id
                  ? '2px solid #3b82f6'
                  : '2px solid rgba(148, 163, 184, 0.2)',
                background: selectedFilter === category.id
                  ? 'rgba(59, 130, 246, 0.1)'
                  : 'rgba(51, 65, 85, 0.3)',
                color: selectedFilter === category.id ? '#60a5fa' : '#cbd5e1',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                transform: selectedFilter === category.id ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: selectedFilter === category.id
                  ? '0 8px 25px rgba(59, 130, 246, 0.2)'
                  : '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                if (selectedFilter !== category.id) {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.4)';
                  e.target.style.background = 'rgba(71, 85, 105, 0.5)';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFilter !== category.id) {
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                  e.target.style.background = 'rgba(51, 65, 85, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span style={{ fontSize: '18px' }}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '28px'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(20px)',
                border: hoveredProject === project.id
                  ? '2px solid #3b82f6'
                  : '2px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '20px',
                padding: '0',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) ${index * 0.1}s`,
                boxShadow: hoveredProject === project.id
                  ? '0 20px 60px rgba(59, 130, 246, 0.3)'
                  : '0 8px 30px rgba(0, 0, 0, 0.2)',
                cursor: 'default'
              }}
            >
              {/* Header with Icon */}
              <div style={{
                padding: '32px',
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
                borderRadius: '18px 18px 0 0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div style={{
                      fontSize: '40px',
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                    }}>
                      {project.icon}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 16px',
                      border: project.status === 'live'
                        ? '1px solid rgba(16, 185, 129, 0.3)'
                        : '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '20px',
                      background: project.status === 'live'
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(245, 158, 11, 0.1)',
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: project.status === 'live' ? '#10b981' : '#f59e0b',
                        boxShadow: `0 0 10px ${project.status === 'live' ? '#10b981' : '#f59e0b'}60`,
                        animation: project.status === 'live' ? 'pulse 2s infinite' : 'none'
                      }}></div>
                      <span style={{
                        color: project.status === 'live' ? '#10b981' : '#f59e0b',
                        fontSize: '13px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {project.status === 'live' ? t('projects.status.live') : t('projects.status.development')}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: 'white',
                  lineHeight: '1.2'
                }}>
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <p style={{
                  color: 'rgba(148, 163, 184, 0.8)',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  {t(`projects.items.${project.id}.description`)}
                </p>
              </div>

              {/* Metrics Section */}
              <div style={{
                padding: '24px 32px',
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px'
                }}>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} style={{
                      textAlign: 'center',
                      padding: '16px',
                      border: '1px solid rgba(148, 163, 184, 0.1)',
                      borderRadius: '12px',
                      background: 'rgba(30, 41, 59, 0.3)'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: '#60a5fa',
                        marginBottom: '6px'
                      }}>
                        {value}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: 'rgba(148, 163, 184, 0.8)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: '600'
                      }}>
                        {t(`projects.metrics.${key}`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div style={{
                padding: '24px 32px',
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
              }}>
                <h4 style={{
                  fontSize: '14px',
                  marginBottom: '16px',
                  color: '#e2e8f0',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {t('projects.techStack')}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={tech} style={{
                      background: 'rgba(51, 65, 85, 0.4)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '10px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      color: '#e2e8f0',
                      fontWeight: '600',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                      transition: `all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) ${techIndex * 0.05}s`,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button Section */}
              <div style={{ padding: '32px' }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    padding: '18px 32px',
                    border: '2px solid transparent',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '700',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.4)';
                    e.target.style.borderColor = '#60a5fa';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.3)';
                    e.target.style.borderColor = 'transparent';
                  }}
                >
                  <span style={{ fontSize: '20px' }}></span>
                  {t('projects.viewProject')}
                  <span style={{
                    fontSize: '16px',
                    opacity: 0.9,
                    transition: 'transform 0.3s ease'
                  }}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          border: '2px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '20px',
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(15px)',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            marginBottom: '12px'
          }}>
            {t('projects.cta.title')}
          </h3>
          <p style={{
            fontSize: '18px',
            color: 'rgba(148, 163, 184, 0.8)',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            {t('projects.cta.description')}
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)',
              color: 'white',
              border: '2px solid transparent',
              padding: '18px 40px',
              borderRadius: '14px',
              fontSize: '17px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 60px rgba(99, 102, 241, 0.4)';
              e.target.style.borderColor = '#a855f7';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.3)';
              e.target.style.borderColor = 'transparent';
            }}
          >
            {t('projects.startProject')}
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @media (max-width: 768px) {
            .projects-grid {
              grid-template-columns: 1fr !important;
              gap: 24px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsSimple;