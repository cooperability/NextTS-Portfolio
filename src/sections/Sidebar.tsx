import React from 'react'
// import Link from 'next/link'
import styles from '../styles/utils.module.css'
import ActiveLink from '../components/activeLink'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <nav className={styles.sidebarNav}>
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
