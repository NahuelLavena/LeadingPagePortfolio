import { useState, useEffect, useContext } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '../ThemeContext'
import './Navbar.css'

export default function Navbar() {
  // Detectamos si el usuario scrolleó para agregar sombra
  const [scrolled, setScrolled] = useState(false)
  const theme = useContext(ThemeContext)
  
  // Fallback si el contexto no está disponible
  const isDark = theme?.isDark ?? false
  const toggleTheme = theme?.toggleTheme ?? (() => {})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo / nombre */}
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__logo-dot" />
          Nahuel Lavena
        </a>

        {/* Links de navegación */}
        <nav className="navbar__links">
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="navbar__cta">
            GitHub ↗
          </a>
          <button 
            onClick={toggleTheme}
            className="navbar__theme-toggle"
            aria-label="Cambiar tema"
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  )
}