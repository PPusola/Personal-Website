import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticExperiences } from '../data/staticData'

const ExperiencePage = () => {
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
          Experience
        </h2>

        <div className="space-y-10">
          {staticExperiences.map((experience) => (
            <div
              key={experience.id}
              className={`${theme.card} rounded-xl ${theme.shadow} p-8 border ${theme.border}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${theme.text.primary}`}>
                    {experience.title}
                  </h3>
                  <h4 className={`text-lg font-semibold mt-1 ${theme.text.secondary}`}>
                    {experience.company}
                  </h4>
                </div>
                <span className={`text-sm font-medium ${theme.text.muted} whitespace-nowrap`}>
                  {experience.date}
                </span>
              </div>

              {experience.responsibilities && experience.responsibilities.length > 0 && (
                <ul className={`space-y-2 ${theme.text.secondary}`}>
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage
