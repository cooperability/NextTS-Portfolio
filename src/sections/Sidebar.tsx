import React from 'react'
import styles from '../styles/utils.module.css'
import ActiveLink from '../components/activeLink'
import { useTheme } from 'next-themes'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
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
      </nav>
    </div>
  )
}

export default Sidebar
