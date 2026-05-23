// =============================================
// SKILLS COMPONENT
// Edit the skillGroups array to add/remove skills
// =============================================

import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

// 🔁 Edit these skill groups to match your current portfolio
const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Angular', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    label: 'Mobile',
    skills: ['Flutter', 'Dart', 'BLoC', 'Google Maps API', 'CustomPainter'],
  },
  {
    label: 'Backend & Tools',
    skills: ['Go', 'Java', 'Spring Boot', 'MongoDB', 'SQLite', 'WebSockets', 'REST APIs'],
  },
  {
    label: 'DevOps & Workflow',
    skills: ['Jenkins', 'SonarQube', 'Git', 'GitHub', 'Vite', 'Vercel', 'Render'],
  },
]

function SkillBadge({ name }) {
  return <span className={styles.badge}>{name}</span>
}

function SkillGroup({ group }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupLabel}>{group.label}</h3>
      <div className={styles.badges}>
        {group.skills.map(skill => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div ref={ref} className="reveal">
          <p className={styles.eyebrow}>What I work with</p>
          <h2 id="skills-heading" className={styles.heading}>Skills &amp; Technologies</h2>
          <div className={styles.grid}>
            {skillGroups.map(group => (
              <SkillGroup key={group.label} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
