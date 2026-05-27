import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticHobbies } from '../data/staticData'

const HobbiesPage = () => {
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
          Hobbies & Interests
        </h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l ${theme.border}`}>
          {staticHobbies.map((hobby) => (
            <article
              key={hobby.id}
              className={`p-6 border-b border-r ${theme.border} ${theme.card}`}
            >
              <h3 className={`text-xl font-semibold ${theme.text.primary}`}>{hobby.title}</h3>
              <p className={`mt-3 ${theme.text.secondary} leading-relaxed`}>{hobby.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HobbiesPage
