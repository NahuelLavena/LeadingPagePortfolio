import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Nahuel Lavena — Construido con React + Vite
        </p>
        <p className="footer__made">
          Hecho con ♥ en Buenos Aires
        </p>
      </div>
    </footer>
  )
}