import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '../src/components/Contact'

describe('Contact', () => {
  it('renderiza el título de contacto', () => {
    render(<Contact />)
    expect(screen.getByText(/Hablemos de/)).toBeInTheDocument()
    expect(screen.getByText(/tu proyecto/)).toBeInTheDocument()
  })

  it('renderiza los campos del formulario', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
  })

  it('permite escribir en los campos', () => {
    render(<Contact />)
    const nombreInput = screen.getByLabelText('Nombre')
    fireEvent.change(nombreInput, { target: { value: 'Juan' } })
    expect(nombreInput.value).toBe('Juan')
  })

  it('muestra mensaje de éxito al enviar', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    })

    render(<Contact />)
    
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Juan' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'juan@test.com' } })
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola' } })
    
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('¡Mensaje enviado!')).toBeInTheDocument()
    })

    global.fetch.mockRestore()
  })

  it('renderiza links de contacto', () => {
    render(<Contact />)
    expect(screen.getByText('tu@email.com')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
  })
})
