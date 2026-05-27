import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticAwards } from '../data/staticData'

const getAwardYear = (award) => {
  const match = award.date?.match(/\d{4}/)
  return match ? Number(match[0]) : 0
}

const AwardsPage = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()
  const chronologicalAwards = [...staticAwards].sort((a, b) => {
    const yearDifference = getAwardYear(a) - getAwardYear(b)
    return yearDifference || a.title.localeCompare(b.title)
  })

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

        <div className={`divide-y ${theme.border} border-y ${theme.border}`}>
          {chronologicalAwards.map((award) => (
            <article
              key={award.id}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-8 py-7"
            >
              <p className={`text-sm font-medium ${theme.text.muted}`}>{award.date}</p>
              <div>
                <h3 className={`text-xl font-semibold ${theme.text.primary}`}>{award.title}</h3>
                <p className={`mt-1 font-medium ${theme.text.secondary}`}>{award.organization}</p>
                <p className={`mt-3 ${theme.text.secondary} leading-relaxed`}>{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AwardsPage
