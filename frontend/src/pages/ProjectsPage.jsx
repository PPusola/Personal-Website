import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { PROJECT_CATEGORIES, staticProjects } from '../data/staticData'

const CategoryCard = ({ category, projectCount, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'

  return (
    <Link
      to={`/projects/${category.key}`}
      ref={ref}
      className={`group block border-l-4 ${category.color} ${theme.card} border-y border-r ${theme.border} transition-colors duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="p-7 min-h-[220px] flex flex-col justify-between">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${theme.text.muted}`}>
            {category.kicker}
          </p>
          <h3 className={`mt-4 text-2xl font-bold ${theme.text.primary}`}>
            {category.label}
          </h3>
          <p className={`mt-3 ${theme.text.secondary} text-base leading-relaxed`}>
            {category.description}
          </p>
        </div>

        <div className={`mt-8 flex items-center justify-between pt-4 border-t ${theme.border}`}>
          <span className={`text-sm font-medium ${theme.text.muted}`}>
            {projectCount} project{projectCount !== 1 ? 's' : ''}
          </span>
          <span className={`text-sm font-semibold ${primaryLink}`}>
            View Projects
          </span>
        </div>
      </div>
    </Link>
  )
}

const ProjectsPage = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  const categoryCounts = Object.keys(PROJECT_CATEGORIES).reduce((acc, key) => {
    acc[key] = staticProjects.filter(p => p.category === key).length
    return acc
  }, {})

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${theme.text.primary}`}>
            Projects
          </h2>
          <p className={`text-xl ${theme.text.secondary} max-w-3xl leading-relaxed`}>
            A working archive of client sites, course projects, mobile apps, and AI/data tools.
            The stronger projects are written up with implementation details instead of marketing copy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.values(PROJECT_CATEGORIES).map((category, index) => (
            <CategoryCard
              key={category.key}
              category={category}
              projectCount={categoryCounts[category.key] || 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
