import React from 'react'
import styles from '../styles/utils.module.css'
import ActiveLink from '../components/activeLink'
import { useTheme } from 'next-themes'

interface SidebarProps {
  isOpen: boolean
  resumeUrl?: string
  allLinksUrl?: string
  privacyStatementUrl?: string
  accessibilityStatementUrl?: string
}

const Sidebar = ({
  isOpen,
  resumeUrl,
  allLinksUrl,
  privacyStatementUrl,
  accessibilityStatementUrl,
}: SidebarProps) => {
  const { theme } = useTheme()

  const sidebarThemeClass =
    theme === 'dark' ? styles.sidebarDark : styles.sidebarLight

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${sidebarThemeClass}`}
    >
      <nav className={styles.sidebarNav} aria-label="Sidebar navigation">
        <ActiveLink
          className={styles.navLink}
          activeClassName={styles.boldLink}
          href="/"
        >
          | Home |
        </ActiveLink>
        <ActiveLink
          className={styles.navLink}
          activeClassName={styles.boldLink}
          href="/demos"
        >
          | Demos |
        </ActiveLink>
        <ActiveLink
          className={styles.navLink}
          activeClassName={styles.boldLink}
          href="/resources"
        >
          | Resources |
        </ActiveLink>

        {(resumeUrl ||
          allLinksUrl ||
          privacyStatementUrl ||
          accessibilityStatementUrl) && (
          <div className={styles.horizLine} style={{ margin: '1rem 0' }} />
        )}

        {resumeUrl && (
          <a
            href={resumeUrl}
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">📄 </span>Resume
          </a>
        )}
        {allLinksUrl && (
          <ActiveLink
            href={allLinksUrl}
            className={styles.navLink}
            activeClassName={styles.boldLink}
          >
            <span aria-hidden="true">🔗 </span>All Links
          </ActiveLink>
        )}
        {privacyStatementUrl && (
          <ActiveLink
            href={privacyStatementUrl}
            className={styles.navLink}
            activeClassName={styles.boldLink}
          >
            🔒Privacy
          </ActiveLink>
        )}
        {accessibilityStatementUrl && (
          <ActiveLink
            href={accessibilityStatementUrl}
            className={styles.navLink}
            activeClassName={styles.boldLink}
          >
            ♿Accessibility
          </ActiveLink>
        )}
      </nav>
    </div>
  )
}

export default Sidebar
