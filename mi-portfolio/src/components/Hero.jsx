import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero__inner">

        {/* Badge de disponibilidad */}
        <div className="hero__badge fade-up fade-up-1">
          <span className="hero__badge-dot" />
          Disponible para proyectos freelance
        </div>

        {/* Título principal */}
        <h1 className="hero__title fade-up fade-up-2">
          Full Stack Developer<br />
          <span className="hero__title-accent">que construye</span><br />
          experiencias reales.
        </h1>

        {/* Descripción */}
        <p className="hero__desc fade-up fade-up-3">
          Hola, soy <strong>Nahuel Lavena</strong>. Me especializo en React y el
          ecosistema JavaScript moderno. Construyo interfaces rápidas, accesibles
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
        </div>

        {/* Stats rápidas */}
        <div className="hero__stats fade-up fade-up-4">
          <div className="hero__stat">
            <span className="hero__stat-num">+5</span>
            <span className="hero__stat-label">Proyectos</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">3</span>
            <span className="hero__stat-label">Años de experiencia</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">Java</span>
            <span className="hero__stat-label">Stack principal</span>
          </div>
        </div>

      </div>
    </section>
  )
}