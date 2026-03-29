import { useState } from 'react'
import { Mail, Link, GitBranch, Send } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  // Estado del formulario
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Por ahora solo simula el envío. Podés conectar EmailJS o Formspree.
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    setSent(true)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact__inner">

        {/* Columna izquierda: info */}
        <div className="contact__info fade-up">
          <p className="section-label">Contacto</p>
          <h2 className="section-title">Hablemos de<br />tu proyecto</h2>
          <p className="section-subtitle">
            ¿Tenés una idea o un proyecto en mente? Escribime y te respondo
            a la brevedad.
          </p>

          {/* Links sociales */}
          <div className="contact__socials">
            <a href="mailto:tu@email.com" className="contact__social-link">
              <Mail size={18} />
              tu@email.com
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <Link size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="contact__form-wrap fade-up fade-up-2">
          {sent ? (
            // Mensaje de éxito
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <h3>¡Mensaje enviado!</h3>
              <p>Te voy a responder lo antes posible.</p>
              <button className="btn btn--ghost" onClick={() => setSent(false)}>
                Enviar otro
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contame sobre tu proyecto..."
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary contact__submit">
                <Send size={16} />
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}