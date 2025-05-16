'use client'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // When NEXT_PUBLIC_AXE_FORCE_THEME is 'light', force the light theme for testing.
  // IMPORTANT: For this to work with process.env in client component, var must be prefixed with NEXT_PUBLIC_
  const forcedTheme =
    process.env.NEXT_PUBLIC_AXE_FORCE_THEME === 'light' ? 'light' : undefined

  if (!mounted && !forcedTheme) {
    // Only skip ThemeProvider if not mounted AND not forcing a theme
    return <>{children}</>
  }

  // If forcedTheme is set, pass it to ThemeProvider.
  // Otherwise, let ThemeProvider manage the theme normally.
  // Ensure attribute="class" is used if your Tailwind dark mode depends on it.
  return (
    <ThemeProvider attribute="class" forcedTheme={forcedTheme || undefined}>
      {children}
    </ThemeProvider>
  )
}
