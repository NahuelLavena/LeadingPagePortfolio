import { useState, useEffect, useContext } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { ThemeContext } from '../ThemeContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
        <a href="#inicio" className="navbar__logo">
          <span className="navbar__logo-dot" />
          Nahuel Lavena
        </a>

        <button 
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`navbar__links ${mobileMenuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          <a href="https://github.com/NahuelLavena" target="_blank" rel="noopener noreferrer" className="navbar__cta">
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