import React from 'react'
import styles from '../styles/utils.module.css'
import ActiveLink from '../components/activeLink'
import { useTheme } from 'next-themes'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
  resumeUrl?: string
  allLinksUrl?: string
  privacyStatementUrl?: string
  accessibilityStatementUrl?: string
}

const Sidebar = ({
  isOpen,
  toggleSidebar,
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
      {isOpen && (
        <Button
          onClick={toggleSidebar}
          aria-label="Close menu"
          className="absolute top-12 right-3 border rounded-md p-1 bg-transparent"
        >
          <XMarkIcon className="h-5 w-5" />
        </Button>
      )}

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
