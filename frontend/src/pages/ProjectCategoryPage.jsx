import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticProjects, PROJECT_CATEGORIES } from '../data/staticData'

// ── Modal ────────────────────────────────────────────────────────────────────

const ProjectModal = ({ project, isOpen, onClose }) => {
  const theme = useTimeBasedTheme()

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
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
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div
        className={`relative ${theme.card} rounded-2xl ${theme.shadow} max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 z-[101] ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose() }}
          className={`absolute top-4 right-4 z-20 p-2 ${theme.card} border-2 ${theme.border} ${theme.text.primary} ${theme.hover.card} rounded-full transition-all shadow-lg hover:scale-110`}
          aria-label="Close modal"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {project.image_url && (
          <div className="w-full h-64 md:h-80 bg-gray-200 dark:bg-gray-700 rounded-t-2xl overflow-hidden">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl">${project.icon || '💻'}</div>`
              }}
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{project.icon || '💻'}</div>
            <div className="flex-1">
              <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${theme.text.primary}`}>
                {project.title}
              </h2>
            </div>
          </div>

          <div className="mb-6">
            <p className={`text-lg ${theme.text.secondary} leading-relaxed whitespace-pre-line`}>
              {project.description}
            </p>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="mb-6">
              <h3 className={`text-xl font-semibold mb-3 ${theme.text.primary}`}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(project.link || project.live_url) && (
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-3">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-6.75 6.75M6 8.25v9.75h9.75" />
                  </svg>
                  <span>View Live</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all group dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index, onClick }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [isHovered, setIsHovered] = useState(false)
  const theme = useTimeBasedTheme()

  return (
    <div
      ref={ref}
      className={`aspect-square ${theme.card} rounded-2xl ${theme.shadow} hover:shadow-2xl transition-all duration-500 border ${theme.border} transform cursor-pointer overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      } hover:scale-105 group relative`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(project) } }}
    >
      <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {project.icon || '💻'}
          </div>
          <h3 className={`text-xl font-bold ${theme.text.primary} mb-3`}>
            {project.title}
          </h3>
        </div>

        <p className={`text-sm ${theme.text.secondary} line-clamp-3 mb-4 flex-grow`}>
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className={`px-2 py-1 text-xs ${theme.text.muted}`}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {(project.link || project.live_url) && (
          <div className="flex items-center gap-2">
            <svg className={`w-4 h-4 ${theme.text.secondary}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className={`text-xs ${theme.text.muted} ${isHovered ? 'opacity-100' : 'opacity-60'}`}>
              Click to view details
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

const ProjectCategoryPage = () => {
  const { category } = useParams()
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const theme = useTimeBasedTheme()

  const categoryMeta = PROJECT_CATEGORIES[category]
  const projects = staticProjects.filter(p => p.category === category)

  const handleCardClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  if (!categoryMeta) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className={`text-center ${theme.text.secondary}`}>
          <p className="text-2xl mb-4">Category not found.</p>
          <Link to="/projects" className="text-primary-600 hover:underline">← Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/projects"
          className={`inline-flex items-center gap-2 mb-10 text-sm font-medium ${theme.text.secondary} hover:text-primary-600 transition-colors group`}
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{categoryMeta.icon}</span>
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold ${theme.text.primary}`}>
                {categoryMeta.label}
              </h2>
            </div>
          </div>
          <p className={`text-lg ${theme.text.secondary} max-w-2xl`}>
            {categoryMeta.description}
          </p>
          {/* Gradient accent bar */}
          <div className={`mt-4 h-1 w-24 rounded-full bg-gradient-to-r ${categoryMeta.color}`} />
        </div>

        {projects.length === 0 ? (
          <p className={`${theme.text.muted} text-lg`}>No projects in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
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
    </div>
  )
}

export default ProjectCategoryPage
