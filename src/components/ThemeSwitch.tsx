import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import styles from '../styles/utils.module.css'

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.themeToggleBtn} ${styles.themeSwitch} ${isDark ? styles.themeToggleDark : styles.themeToggleLight}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Sliding circle */}
      <div
        className={`${styles.themeSwitchCircle} ${isDark ? styles.themeSwitchCircleDark : styles.themeSwitchCircleLight}`}
      >
        {isDark ? (
          <MoonIcon className={styles.themeSwitchIconDark} />
        ) : (
          <SunIcon className={styles.themeSwitchIconLight} />
        )}
      </div>
    </button>
  )
}

export default ThemeSwitch
