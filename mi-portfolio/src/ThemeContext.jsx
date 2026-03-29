import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  
  const saved = localStorage.getItem('theme')
  if (saved) {
    return saved === 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
