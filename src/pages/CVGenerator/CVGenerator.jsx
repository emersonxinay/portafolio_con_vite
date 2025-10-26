import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { defaultCVData, cvTemplates, jobPresets } from '../../data/cvTemplateData';
import CVPreview from './CVPreview';
import CVForm from './CVForm';
import SEOHead from '../../components/SEO/SEOHead';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CVGenerator = () => {
  const [cvData, setCvData] = useState(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState('harvard');
  const [savedVersions, setSavedVersions] = useState([]);
  const [currentVersion, setCurrentVersion] = useState('');
  const [showPreview, setShowPreview] = useState(true);
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [showVersions, setShowVersions] = useState(false);
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

  // Exportar a PDF
  const downloadPDF = async () => {
    const element = document.getElementById('cv-preview');
    if (!element) return;

    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-xl z-50';
    toast.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generando PDF...';
    document.body.appendChild(toast);

    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = 210;
    const pageHeight = 297;
    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

    const fileName = `${currentVersion.replace(/\s+/g, '-') || 'cv'}-${selectedTemplate}.pdf`;
    pdf.save(fileName);

    toast.remove();
    const successToast = document.createElement('div');
    successToast.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50 animate-fade-in';
    successToast.innerHTML = '<i class="fas fa-check-circle mr-2"></i>PDF descargado!';
    document.body.appendChild(successToast);
    setTimeout(() => successToast.remove(), 3000);
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

          {/* Barra de Acciones Sticky */}
          <motion.div
            className="sticky top-20 z-40 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 mb-8 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex flex-wrap gap-3 items-center justify-between">

              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-400 self-center px-2">Presets:</span>
                {Object.entries(jobPresets).map(([key, preset]) => (
                  <button
                    key={key}
                    onClick={() => applyJobPreset(key)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105 text-sm font-semibold shadow-lg"
                  >
                    <i className="fas fa-bolt mr-2"></i>
                    {preset.name}
                  </button>
                ))}
              </div>

              {/* Acciones */}
              <div className="flex gap-2">
                <button
                  onClick={saveVersion}
                  disabled={isSaving}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50"
                >
                  <i className={`fas fa-${isSaving ? 'spinner fa-spin' : 'save'} mr-2`}></i>
                  Guardar
                </button>

                <button
                  onClick={() => setShowVersions(!showVersions)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg relative"
                >
                  <i className="fas fa-folder-open mr-2"></i>
                  Versiones
                  {savedVersions.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                      {savedVersions.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={downloadPDF}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  PDF
                </button>

                <button
                  onClick={exportToJSON}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-download mr-2"></i>
                  JSON
                </button>

                <label className="px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                  <i className="fas fa-upload mr-2"></i>
                  Importar
                  <input type="file" accept=".json" onChange={importFromJSON} className="hidden" />
                </label>

                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all shadow-lg"
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
                      {template.id === 'harvard' && '📜'}
                      {template.id === 'corporate' && '💼'}
                      {template.id === 'minimal' && '⚡'}
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
                        onClick={downloadPDF}
                        className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-sm"
                        title="Descargar PDF"
                      >
                        <i className="fas fa-file-pdf"></i>
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
