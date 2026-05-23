// =============================================
// HERO COMPONENT
// First impression — name, title, bio, CTAs
// =============================================

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import profilePhoto from '../../assets/mayuree-01.jpg'

// Teal arrow icon
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  )
}

// Availability badge
function AvailableBadge() {
  return (
    <div className={styles.badge} aria-label="Open to work">
      <span className={styles.dot} aria-hidden="true" />
      Available for opportunities
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  // Scroll reveal on mount
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.section} id="about" aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>

        <div className={styles.layout}>

          {/* LEFT — text */}
          <div ref={heroRef} className={`reveal ${styles.content}`}>

            <AvailableBadge />

            <h1 id="hero-heading" className={styles.heading}>
              Mayuree <span className={styles.accent}>Reunsati</span>
            </h1>

            <p className={styles.title}>
              Frontend &amp; Mobile Developer
            </p>

            <p className={styles.bio}>
              With over a decade of experience in Finnish pharmacies and retail,
              I bring a service-oriented and detail-driven mindset into software development.
              I build clean, responsive web and mobile apps — graduating from Gritlab, Åland,
              open to opportunities across Finland.
            </p>

            <div className={styles.ctas}>
              <a href="#projects" className={styles.btnPrimary}>
                See my work <ArrowIcon />
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                Get in touch
              </a>
            </div>

          </div>  {/* end .content */}

          {/* RIGHT — photo */}
          <div className={styles.photoWrapper}>
            <img
              src={profilePhoto}
              alt="Mayuree Reunsati"
              width="340"
              height="480"
              loading="lazy"
              className={styles.photo}
            />
          </div>  {/* end .photoWrapper */}

        </div>  {/* end .layout */}

        {/* Decorative teal glow — outside layout, inside inner */}
        <div className={styles.glow} aria-hidden="true" />

      </div>  {/* end .inner */}
    </section>
  )
}
