import { ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '../data/projects'
import './Projects.css'

// Componente de tarjeta individual
function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Cabecera de la card */}
      <div className="project-card__header">
        <span className="project-card__year">{project.year}</span>
        <div className="project-card__links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="Ver demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label="Ver en GitHub"
          >
            <GitBranch size={16} />
          </a>
        </div>
      </div>

      {/* Contenido */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {/* Tags de tecnologías */}
      <div className="project-card__tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        {/* Encabezado de sección */}
        <div className="projects__header">
          <p className="section-label">Trabajos</p>
          <h2 className="section-title">Proyectos seleccionados</h2>
          <p className="section-subtitle">
            Una muestra de lo que construí usando React y el stack moderno de JavaScript.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}