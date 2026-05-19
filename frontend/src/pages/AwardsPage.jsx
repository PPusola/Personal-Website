import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticAwards } from '../data/staticData'

const AwardsPage = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={ref}
          className={`text-4xl md:text-6xl font-bold mb-12 ${theme.text.primary} transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          Awards & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticAwards.map((award) => (
            <div
              key={award.id}
              className={`bg-gradient-to-br ${theme.gradient} rounded-xl ${theme.shadow} hover:shadow-xl transition-all duration-700 p-6 border ${theme.border} text-center transform hover:scale-105`}
            >
              <div className="text-5xl mb-4">{award.icon || '🏆'}</div>
              <h3 className={`text-xl font-semibold mb-2 ${theme.text.primary}`}>{award.title}</h3>
              <p className={`font-medium mb-1 ${theme.text.secondary}`}>{award.organization}</p>
              <p className={`text-sm mb-3 ${theme.text.muted}`}>{award.date}</p>
              <p className={theme.text.secondary}>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AwardsPage
