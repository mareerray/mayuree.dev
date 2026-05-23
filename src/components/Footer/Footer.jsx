import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container--wide ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} Mayuree Reunsati. Built with React.
        </p>
        <p className={styles.note}>
          Designed &amp; coded by me ✦
        </p>
      </div>
    </footer>
  )
}
