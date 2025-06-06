'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import styles from '../styles/utils.module.css'
import Sidebar from './Sidebar'
import ActiveLink from '../components/activeLink'
import ThemeSwitch from '../components/ThemeSwitch'
import { useResponsive } from '../hooks/useResponsive'

const resumeUrl =
  'https://docs.google.com/document/d/15wtKG9juJMYQOI793LvNYMfmeu7hyErO4xWixkTrSHI/edit?usp=sharing'
const allLinksUrl = '/resources/linktree'
const privacyStatementUrl = '/resources/PrivacyStatement'
const accessibilityStatementUrl = '/resources/AccessibilityStatement'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isMobile } = useResponsive()

  const navigator = () => {
    if (isMobile) {
      if (isSidebarOpen) {
        return (
          <button
            className={styles.themeToggleBtn}
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <XMarkIcon />
          </button>
        )
      } else {
        return (
          <button
            className={styles.themeToggleBtn}
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <Bars3Icon />
          </button>
        )
      }
    } else {
      return (
        <div className="flex flex-row space-between">
          <ActiveLink
            className={styles.navLink}
            href="/"
            activeClassName={styles.boldLink}
          >
            | Home |
          </ActiveLink>
          <ActiveLink
            className={styles.navLink}
            href="/demos"
            activeClassName={styles.boldLink}
          >
            | Demos |
          </ActiveLink>
          <ActiveLink
            className={styles.navLink}
            href="/resources"
            activeClassName={styles.boldLink}
          >
            | Resources |
          </ActiveLink>
        </div>
      )
    }
  }

  const renderThemeChanger = () => {
    return <ThemeSwitch />
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div suppressHydrationWarning>
      <div className={styles.Header} suppressHydrationWarning>
        <Sidebar
          isOpen={isSidebarOpen}
          resumeUrl={isMobile ? resumeUrl : undefined}
          allLinksUrl={isMobile ? allLinksUrl : undefined}
          privacyStatementUrl={isMobile ? privacyStatementUrl : undefined}
          accessibilityStatementUrl={
            isMobile ? accessibilityStatementUrl : undefined
          }
        />
        <nav
          className={styles.navbar}
          aria-label="Main navigation"
          suppressHydrationWarning
        >
          {navigator()}
        </nav>
        {renderThemeChanger()}
      </div>
      <div className={styles.horizLine} />
    </div>
  )
}

export default Header
