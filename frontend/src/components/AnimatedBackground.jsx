import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const AnimatedBackground = () => {
  const theme = useTimeBasedTheme()
  const isDark = theme.mode === 'dark'

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-500"
      style={{
        zIndex: 0,
        backgroundColor: isDark ? '#0f1115' : '#f8f7f3',
        backgroundImage: isDark
          ? 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)'
          : 'linear-gradient(rgba(24,24,27,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
      aria-hidden="true"
    />
  )
}

export default AnimatedBackground
