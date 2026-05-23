// =============================================
// CONTACT COMPONENT
// =============================================

import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

// Email icon
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

// GitHub icon
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Contact() {
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
<section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div ref={ref} className={`reveal ${styles.inner}`}>

          {/* Left — text content */}
          <div className={styles.content}>
            <p className={styles.eyebrow}>Let's talk</p>
            <h2 id="contact-heading" className={styles.heading}>Get in touch</h2>
            <p className={styles.desc}>
              I'm open to frontend, mobile, and full-stack opportunities across Finland.
              Feel free to reach out — I'd love to hear from you.
            </p>

            <a href="mailto:mareerray@gmail.com" className={styles.emailBtn}>
              <EmailIcon />
              mareerray@gmail.com
            </a>

            <div className={styles.socials}>
              <a href="https://github.com/mareerray" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub profile">
                <GitHubIcon />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mayuree-reunsati" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn profile">
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — logo */}
          <div className={styles.logoWrap}>
            <img src="../src/assets/mayuree-01.jpg" alt="DevMayuree logo" className={styles.logo} />
          </div>

        </div>
      </div>
    </section>  )
}
