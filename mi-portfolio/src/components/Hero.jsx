import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero__inner">

        {/* Badge de disponibilidad */}
        <div className="hero__badge fade-up fade-up-1" role="status" aria-label="Estado de disponibilidad">
          <span className="hero__badge-dot" aria-hidden="true" />
          Disponible
        </div>

        {/* Título principal */}
        <h1 className="hero__title fade-up fade-up-2">
          Full Stack Developer<br />
          <span className="hero__title-accent">que construye</span><br />
          experiencias reales.
        </h1>

        {/* Descripción */}
        <p className="hero__desc fade-up fade-up-3">
          Hola, soy <strong>Nahuel Lavena</strong>. Me especializo en Desarrollo de
          Software. Construyo interfaces rápidas, accesibles
          y con mucha atención al detalle.
        </p>

        {/* CTAs */}
        <div className="hero__actions fade-up fade-up-4">
          <a href="#proyectos" className="btn btn--primary">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Contactarme
          </a>
          <a href="/NahuelLavenaCV.pdf" download="NahuelLavenaCV.pdf" className="btn btn--download" aria-label="Descargar CV en PDF">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Descargar CV
          </a>
        </div>

        {/* Stats rápidas */}
        <dl className="hero__stats fade-up fade-up-4">
          <div className="hero__stat">
            <dt className="hero__stat-label">Proyectos</dt>
            <dd className="hero__stat-num">+5</dd>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <dt className="hero__stat-label">Años de experiencia</dt>
            <dd className="hero__stat-num">3</dd>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <dt className="hero__stat-label">Stack principal</dt>
            <dd className="hero__stat-num">Java</dd>
          </div>
        </dl>

      </div>
    </section>
  )
}