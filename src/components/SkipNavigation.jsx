/**
 * SkipNavigation Component
 * Permite a usuarios de teclado/screen readers saltar directamente al contenido principal
 * Mejora accesibilidad significativamente (WCAG 2.4.1)
 */
const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="skip-navigation"
      aria-label="Saltar al contenido principal"
    >
      Saltar al contenido principal
    </a>
  )
}

export default SkipNavigation
