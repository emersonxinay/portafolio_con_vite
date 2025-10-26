/**
 * Services configuration with Font Awesome icons
 * Maps service types to their visual representation
 */

export const serviceIcons = [
  "fas fa-code",           // Desarrollo Web
  "fas fa-shopping-cart",  // E-commerce
  "fas fa-robot",          // Automatización
  "fas fa-cogs",           // APIs
  "fas fa-cloud",          // Cloud & DevOps
  "fas fa-chalkboard-teacher" // Capacitación
];

export const serviceColors = [
  "from-blue-400 to-cyan-500",
  "from-green-400 to-emerald-500",
  "from-purple-400 to-pink-500",
  "from-orange-400 to-red-500",
  "from-indigo-400 to-purple-500",
  "from-teal-400 to-cyan-500"
];

export const serviceBgColors = [
  "from-blue-900/10 to-cyan-900/10",
  "from-green-900/10 to-emerald-900/10",
  "from-purple-900/10 to-pink-900/10",
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
