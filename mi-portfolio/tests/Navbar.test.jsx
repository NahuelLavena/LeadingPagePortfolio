import { render, screen } from '@testing-library/react'
import Navbar from '../src/components/Navbar'

vi.mock('../src/ThemeContext', () => ({
  ThemeContext: {
    Consumer: ({ children }) => children({ isDark: false, toggleTheme: vi.fn() }),
  },
  useContext: () => ({ isDark: false, toggleTheme: vi.fn() }),
}))

describe('Navbar', () => {
  it('renderiza el logo con el nombre', () => {
    render(<Navbar />)
    expect(screen.getByText('Nahuel Lavena')).toBeInTheDocument()
  })

  it('renderiza los links de navegación', () => {
    render(<Navbar />)
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renderiza el botón de GitHub', () => {
    render(<Navbar />)
    expect(screen.getByText(/GitHub/)).toBeInTheDocument()
  })

  it('renderiza el toggle de tema', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /cambiar tema/i })).toBeInTheDocument()
  })
})
