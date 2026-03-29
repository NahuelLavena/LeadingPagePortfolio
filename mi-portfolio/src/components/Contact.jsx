import { useState } from 'react'
import { Mail, Link, GitBranch, Send, Loader2 } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Reemplaza 'TU_FORM_ID' con tu ID de Formspree
      const res = await fetch('https://formspree.io/f/xqegpwej', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setSent(true)
      setForm({ nombre: '', email: '', mensaje: '' })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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

            {/*Link redes */}
            <a
              href="https://www.linkedin.com/in/nahuel-lavena-b11a08216/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              <Link size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/NahuelLavena"
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
              {error && (
                <div className="contact__error" role="alert">
                  {error}
                </div>
              )}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <button type="submit" className="btn btn--primary contact__submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={16} className="spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}