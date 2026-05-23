// =============================================
// NAVBAR COMPONENT
// Props:
//   theme       — current theme ('dark' | 'light')
//   toggleTheme — function to switch theme
// =============================================

import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

// SVG Logo — your DEV mark in teal
function Logo() {
  return (
    <a href="#" className={styles.logo} aria-label="Mayuree Reunsati — Home">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="var(--color-primary)"/>
        <text x="7" y="26" fontFamily="monospace" fontSize="20" fontWeight="700" fill="#0f1117">M</text>
      </svg>
      <span className={styles.logoText}>Mayuree</span>
    </a>
  )
}

// Sun icon for light mode
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

// Moon icon for dark mode
function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container--wide`} aria-label="Main navigation">
        <Logo />

        {/* Desktop navigation links */}
        <ul className={styles.links} role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle button */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
