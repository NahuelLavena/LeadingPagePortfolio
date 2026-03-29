import { render, screen } from '@testing-library/react'
import Projects from '../src/components/Projects'

describe('Projects', () => {
  it('renderiza el título de la sección', () => {
    render(<Projects />)
    expect(screen.getByText('Proyectos seleccionados')).toBeInTheDocument()
  })

  it('renderiza la descripción de la sección', () => {
    render(<Projects />)
    expect(screen.getByText(/Una muestra de lo que construí/)).toBeInTheDocument()
  })

  it('renderiza tarjetas de proyectos', () => {
    render(<Projects />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThan(0)
  })
})
