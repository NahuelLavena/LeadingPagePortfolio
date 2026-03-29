import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  it('renderiza sin errores', () => {
    render(<Footer />)
    expect(screen.getByText(/Nahuel Lavena/)).toBeInTheDocument()
  })

  it('renderiza el mensaje de créditos', () => {
    render(<Footer />)
    expect(screen.getByText(/Hecho con/)).toBeInTheDocument()
  })
})
