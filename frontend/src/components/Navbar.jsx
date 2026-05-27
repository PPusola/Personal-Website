import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTimeBasedTheme, setThemeOverride } from '../hooks/useTimeBasedTheme'

const navItems = [
  { path: '/', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/awards', label: 'Awards' },
  { path: '/hobbies', label: 'Hobbies' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [manualMode, setManualMode] = useState(null)
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'
  const location = useLocation()

  const toggleTheme = () => {
    if (manualMode === null) {
      // Toggle from current theme
      const newMode = theme.mode === 'dark' ? 'light' : 'dark'
      setManualMode(newMode)
      setThemeOverride(newMode)
    } else {
      // Switch to the other mode
      const newMode = manualMode === 'dark' ? 'light' : 'dark'
      setManualMode(newMode)
      setThemeOverride(newMode)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${theme.navbar} ${
      scrolled 
        ? `border-b ${theme.border}` 
        : `border-b ${theme.border} opacity-95 backdrop-blur-sm`
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-sm font-bold tracking-wide ${theme.text.primary}`}>
              Priyanshu Pusola
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-1 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? primaryLink
                      : `${theme.text.secondary} ${theme.hover.text}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`${theme.text.secondary} ${theme.hover.text} px-3 py-2 text-sm font-medium transition-colors border ${theme.border} flex items-center gap-2`}
                title={`Switch to ${theme.mode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme.mode === 'dark' ? (
                  <span>Light</span>
                ) : (
                  <span>Dark</span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 ${theme.text.secondary} ${theme.hover.text} focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme.navbar} border-t ${theme.border}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block ${theme.text.secondary} ${theme.hover.text} px-3 py-2 text-base font-medium w-full text-left`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              className={`block ${theme.text.secondary} ${theme.hover.text} px-3 py-2 text-base font-medium w-full text-left border-t ${theme.border} flex items-center gap-2`}
            >
              {theme.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
