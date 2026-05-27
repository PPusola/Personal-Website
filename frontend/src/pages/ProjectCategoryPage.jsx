import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticProjects, PROJECT_CATEGORIES } from '../data/staticData'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <article
        className={`relative z-[101] ${theme.card} border ${theme.border} max-w-3xl w-full max-h-[88vh] overflow-y-auto`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <div className={`flex items-start justify-between gap-6 border-b ${theme.border} pb-6`}>
            <div>
              {project.date && <p className={`text-sm mb-2 ${theme.text.muted}`}>{project.date}</p>}
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.text.primary}`}>
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={`shrink-0 px-3 py-2 text-sm border ${theme.border} ${theme.text.secondary} hover:underline`}
              aria-label="Close project details"
              type="button"
            >
              Close
            </button>
          </div>

          <p className={`mt-6 text-lg ${theme.text.secondary} leading-relaxed whitespace-pre-line`}>
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-7">
              <h3 className={`text-sm font-semibold uppercase tracking-[0.16em] ${theme.text.muted}`}>Stack</h3>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-sm ${theme.text.secondary}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(project.link || project.live_url) && (
            <div className={`mt-8 pt-5 border-t ${theme.border} flex flex-wrap gap-4`}>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${primaryLink} hover:underline`}
                >
                  Live site
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium ${primaryLink} hover:underline`}
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'
  const hoverBg = theme.mode === 'dark' ? 'hover:bg-gray-800/80' : 'hover:bg-gray-50/80'

  return (
    <article
      ref={ref}
      className={`border ${theme.border} ${theme.card} transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => onClick(project)}
        className={`block h-full w-full text-left p-6 ${hoverBg} transition-colors`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-xl font-bold ${theme.text.primary}`}>{project.title}</h3>
          {project.date && <span className={`text-xs ${theme.text.muted} whitespace-nowrap`}>{project.date}</span>}
        </div>

        <p className={`mt-4 text-sm leading-6 ${theme.text.secondary} line-clamp-4`}>
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className={`text-xs ${theme.text.muted}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className={`mt-6 text-sm font-medium ${primaryLink}`}>
          Read details
        </p>
      </button>
    </article>
  )
}

const ProjectCategoryPage = () => {
  const { category } = useParams()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'

  const categoryMeta = PROJECT_CATEGORIES[category]
  const projects = staticProjects.filter((project) => project.category === category)

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 200)
  }

  if (!categoryMeta) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className={`text-center ${theme.text.secondary}`}>
          <p className="text-2xl mb-4">Category not found.</p>
          <Link to="/projects" className={`${primaryLink} hover:underline`}>Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className={`inline-flex mb-10 text-sm font-medium ${primaryLink} hover:underline transition-colors`}
        >
          All Projects
        </Link>

        <header
          ref={ref}
          className={`mb-12 border-b ${theme.border} pb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.text.muted}`}>
            {categoryMeta.kicker}
          </p>
          <h2 className={`mt-3 text-4xl md:text-6xl font-bold ${theme.text.primary}`}>
            {categoryMeta.label}
          </h2>
          <p className={`mt-4 text-lg ${theme.text.secondary} max-w-2xl leading-8`}>
            {categoryMeta.description}
          </p>
        </header>

        {projects.length === 0 ? (
          <p className={`${theme.text.muted} text-lg`}>No projects in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 relative z-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={handleCardClick}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  )
}

export default ProjectCategoryPage
