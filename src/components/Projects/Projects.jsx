// =============================================
// PROJECTS COMPONENT
// This is where you practice the most React!
//
// KEY CONCEPTS USED HERE:
//   useState  — remembers which filter is active
//   .filter() — shows only matching projects
//   .map()    — turns data into cards
// =============================================

import { useState, useEffect, useRef } from 'react'
import { projects, categories } from '../../data/projects'
import styles from './Projects.module.css'

// External link icon
function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

// GitHub icon
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

// A single project card
function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      {/* Category label */}
      <span className={styles.category}>{project.category}</span>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      {/* Tech tags */}
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} className={styles.linkBtn} target="_blank" rel="noopener noreferrer">
            <LinkIcon /> Live demo
          </a>
        )}
        {project.githubUrl && project.githubUrl !== '#' && (
          <a href={project.githubUrl} className={styles.linkBtnGhost} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}

// Filter button (All / Web / Mobile)
function FilterButton({ label, active, onClick }) {
  return (
    <button
      className={`${styles.filterBtn} ${active ? styles.filterBtnActive : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}

export default function Projects() {
  // useState: React remembers which filter is selected
  // Try changing 'all' to 'web' — it will start with Web projects shown
  const [activeFilter, setActiveFilter] = useState('all')

  const ref = useRef(null)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // .filter() — keeps only projects that match the selected category
  // When activeFilter is 'all', show everything
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-heading">
      <div className="container--wide">
        <div ref={ref} className="reveal">
          <p className={styles.eyebrow}>Things I have built</p>
          <h2 id="projects-heading" className={styles.heading}>Projects</h2>

          {/* Filter buttons — clicking one calls setActiveFilter */}
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {categories.map(cat => (
              <FilterButton
                key={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>

          {/* Project count */}
          <p className={styles.count} aria-live="polite">
            Showing {visibleProjects.length} project{visibleProjects.length !== 1 ? 's' : ''}
          </p>

          {/* .map() — turns each project object into a ProjectCard */}
          <div className={styles.grid}>
            {visibleProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
