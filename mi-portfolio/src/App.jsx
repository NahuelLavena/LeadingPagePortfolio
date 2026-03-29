import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  )
}