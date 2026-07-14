import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../src/ThemeContext'

describe('ThemeContext', () => {
  it('provee contexto de tema', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Content</div>
      </ThemeProvider>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
