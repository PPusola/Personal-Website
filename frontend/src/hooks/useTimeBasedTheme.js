import { useState, useEffect } from 'react'

// Global state for manual theme override
let manualThemeOverride = null
const themeListeners = new Set()

export const setThemeOverride = (mode) => {
  manualThemeOverride = mode
  themeListeners.forEach(listener => listener())
}

export const clearThemeOverride = () => {
  manualThemeOverride = null
  themeListeners.forEach(listener => listener())
}

/**
 * Hook that provides site theme colors
 * Uses dark mode by default
 * Supports manual override via setThemeOverride
 */
export const useTimeBasedTheme = () => {
  const getTheme = () => {
    if (manualThemeOverride) {
      return manualThemeOverride
    }
    return 'dark'
  }

  const [theme, setTheme] = useState(getTheme)

  useEffect(() => {
    const listener = () => {
      setTheme(getTheme())
    }
    themeListeners.add(listener)

    const updateTheme = () => {
      if (!manualThemeOverride) {
        setTheme('dark')
      }
    }

    // Keep the default stable while still allowing manual overrides.
    const interval = setInterval(updateTheme, 60 * 60 * 1000)
    
    // Update theme on mount
    updateTheme()

    return () => {
      clearInterval(interval)
      themeListeners.delete(listener)
    }
  }, [])

  // Light theme colors
  const lightTheme = {
    mode: 'light',
    bg: {
      primary: 'bg-[#f8f7f3]',
      secondary: 'bg-[#f1efe8]',
      accent: 'bg-primary-50',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500',
    },
    border: 'border-gray-200',
    card: 'bg-[#fffefa]',
    navbar: 'bg-[#f8f7f3]/95',
    footer: 'bg-gray-900',
    gradient: 'from-primary-50 to-white',
    shadow: 'shadow-sm',
    hover: {
      card: 'hover:bg-primary-50',
      text: 'hover:text-primary-600',
    },
  }

  // Dark theme colors
  const darkTheme = {
    mode: 'dark',
    bg: {
      primary: 'bg-[#0f1115]',
      secondary: 'bg-gray-800',
      accent: 'bg-gray-700',
    },
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
    },
    border: 'border-gray-700',
    card: 'bg-[#151922]',
    navbar: 'bg-[#0f1115]/95',
    footer: 'bg-black',
    gradient: 'from-gray-900 to-gray-800',
    shadow: 'shadow-lg',
    hover: {
      card: 'hover:bg-gray-700',
      text: 'hover:text-primary-400',
    },
  }

  return theme === 'light' ? lightTheme : darkTheme
}
