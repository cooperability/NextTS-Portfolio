'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import styles from '../styles/utils.module.css'
import Sidebar from './Sidebar'
import ActiveLink from '../components/activeLink'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window) {
      const checkWindowSize = () => {
        setIsMobile(window.innerWidth <= 500)
      }
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
      return () => {
        window.removeEventListener('resize', checkWindowSize)
      }
    }
  }, [])

  const navigator = () => {
    if (isMobile) {
      if (isSidebarOpen) {
        return (
          <button className={styles.themeToggleBtn} onClick={toggleSidebar}>
            <XMarkIcon />
          </button>
        )
      } else {
        return (
          <button className={styles.themeToggleBtn} onClick={toggleSidebar}>
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
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button
          className={`${styles.themeToggleBtn} ${styles.themeToggleDark}`}
          onClick={() => setTheme('light')}
          aria-label="Toggle light theme"
        >
          <SunIcon />
        </button>
      )
    } else {
      return (
        <button
          className={`${styles.themeToggleBtn} ${styles.themeToggleLight}`}
          onClick={() => setTheme('dark')}
          aria-label="Toggle dark theme"
        >
          <MoonIcon />
        </button>
      )
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div suppressHydrationWarning>
      <div className={styles.Header} suppressHydrationWarning>
        <Sidebar isOpen={isSidebarOpen} />
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
