import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { PROJECT_CATEGORIES, staticProjects } from '../data/staticData'

const CategoryCard = ({ category, projectCount, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const theme = useTimeBasedTheme()

  return (
    <Link
      to={`/projects/${category.key}`}
      ref={ref}
      className={`group block ${theme.card} rounded-2xl ${theme.shadow} hover:shadow-2xl border ${theme.border} transition-all duration-500 transform cursor-pointer overflow-hidden ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      } hover:scale-105`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Gradient bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${category.color}`} />

      <div className="p-8">
        <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
          {category.icon}
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${theme.text.primary}`}>
          {category.label}
        </h3>
        <p className={`${theme.text.secondary} text-sm mb-6 leading-relaxed`}>
          {category.description}
        </p>

        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${theme.text.muted}`}>
            {projectCount} project{projectCount !== 1 ? 's' : ''}
          </span>
          <span className={`flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all`}>
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
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
          <p className={`text-xl ${theme.text.secondary} max-w-2xl`}>
            A collection of things I've built — explore by category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
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
