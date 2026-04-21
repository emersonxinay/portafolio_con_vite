/**
 * Services configuration with Font Awesome icons
 * Maps service types to their visual representation
 * Index 0 = Data Science & ML (featured/first service)
 */

export const serviceIcons = [
  "fas fa-brain",              // Data Science & ML (FEATURED)
  "fas fa-server",             // Arquitecturas Backend Enterprise
  "fas fa-exchange-alt",       // Sistemas Transaccionales
  "fas fa-robot",              // Sistemas Inteligentes & Automatización
  "fas fa-cloud",              // Cloud & DevOps
  "fas fa-chalkboard-teacher"  // Liderazgo y Mentoría
];

export const serviceColors = [
  "from-purple-500 to-pink-600",    // DS & ML — distinctive purple/pink
  "from-blue-400 to-cyan-500",
  "from-green-400 to-emerald-500",
  "from-orange-400 to-red-500",
  "from-indigo-400 to-purple-500",
  "from-teal-400 to-cyan-500"
];

export const serviceBgColors = [
  "from-purple-900/20 to-pink-900/20",  // DS & ML — slightly stronger bg
  "from-blue-900/10 to-cyan-900/10",
  "from-green-900/10 to-emerald-900/10",
  "from-orange-900/10 to-red-900/10",
  "from-indigo-900/10 to-purple-900/10",
  "from-teal-900/10 to-cyan-900/10"
];

// Map service index to icon, color, and background
export const getServiceStyle = (index) => ({
  icon: serviceIcons[index % serviceIcons.length],
  color: serviceColors[index % serviceColors.length],
  bgColor: serviceBgColors[index % serviceBgColors.length]
});
