import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'

describe('Hero', () => {
  it('renderiza el título principal', () => {
    render(<Hero />)
    expect(screen.getByText(/Full Stack Developer/)).toBeInTheDocument()
  })

  it('renderiza la descripción con el nombre', () => {
    render(<Hero />)
    expect(screen.getByText(/Nahuel Lavena/)).toBeInTheDocument()
  })

  it('renderiza el badge de disponibilidad', () => {
    render(<Hero />)
    expect(screen.getByText(/Disponible/)).toBeInTheDocument()
  })

  it('renderiza los botones de acción', () => {
    render(<Hero />)
    expect(screen.getByText('Ver proyectos')).toBeInTheDocument()
    expect(screen.getByText('Contactarme')).toBeInTheDocument()
  })

  it('renderiza las estadísticas', () => {
    render(<Hero />)
    expect(screen.getByText('+5')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
  })
})
