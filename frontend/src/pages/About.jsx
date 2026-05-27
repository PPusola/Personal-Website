import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'
import { staticExperiences, staticProjects } from '../data/staticData'

const featuredProjectTitles = ['Cyan', 'Cobra Chickens', 'MiDoid']

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 })
  const theme = useTimeBasedTheme()
  const primaryLink = theme.mode === 'dark' ? 'text-primary-400' : 'text-primary-700'
  const featuredProjects = featuredProjectTitles
    .map((title) => staticProjects.find((project) => project.title === title))
    .filter(Boolean)

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className={`border-b ${theme.border} pb-10`}>
            <p className={`text-sm font-semibold tracking-[0.18em] uppercase ${theme.text.muted}`}>
              Edmonton, AB
            </p>
            <h1 className={`mt-4 text-5xl md:text-7xl font-bold leading-tight ${theme.text.primary}`}>
              Priyanshu Pusola
            </h1>
            <p className={`mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed ${theme.text.secondary}`}>
              Software developer building client websites, mobile apps, and practical AI tools.
            </p>
            <p className={`mt-5 max-w-3xl text-lg leading-8 ${theme.text.muted}`}>
              Currently building{' '}
              <a
                href="https://booyaa.net"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${primaryLink} hover:underline`}
              >
                Booyaa
              </a>
              , a freelance web development business. Previously at BlackBerry QNX and Newgen Software.
              Computer Science graduate from the University of Alberta with a minor in Economics.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              <a className={`${primaryLink} hover:underline`} href="mailto:pusola@ualberta.ca">
                pusola@ualberta.ca
              </a>
              <a className={`${theme.text.secondary} hover:underline`} href="tel:8259661673">
                (825) 966-1673
              </a>
              <a
                className={`${theme.text.secondary} hover:underline`}
                href="https://linkedin.com/in/priyanshu-pusola"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className={`${theme.text.secondary} hover:underline`}
                href="https://github.com/PPusola"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 py-12">
            <section>
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Selected Work</h2>
                <Link to="/projects" className={`text-sm font-medium ${primaryLink} hover:underline`}>
                  Full archive
                </Link>
              </div>

              <div className={`divide-y ${theme.border}`}>
                {featuredProjects.map((project) => (
                  <article key={project.id} className="py-6 first:pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className={`text-xl font-semibold ${theme.text.primary}`}>{project.title}</h3>
                      {project.date && <p className={`text-sm ${theme.text.muted}`}>{project.date}</p>}
                    </div>
                    <p className={`mt-3 text-base leading-7 ${theme.text.secondary}`}>
                      {project.description.split('\n')[0]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className={`text-xs ${theme.text.muted}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="space-y-10">
              <section>
                <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Experience</h2>
                <div className={`mt-5 divide-y ${theme.border}`}>
                  {staticExperiences.map((experience) => (
                    <article key={experience.id} className="py-5 first:pt-0">
                      <h3 className={`font-semibold ${theme.text.primary}`}>{experience.title}</h3>
                      <p className={`${theme.text.secondary}`}>{experience.company}</p>
                      <p className={`mt-1 text-sm ${theme.text.muted}`}>{experience.date}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Technical Work</h2>
                <dl className={`mt-5 space-y-4 text-sm leading-6 ${theme.text.secondary}`}>
                  <div>
                    <dt className={`font-semibold ${theme.text.primary}`}>Languages</dt>
                    <dd>Python, JavaScript, Java, C, SQL, HTML/CSS</dd>
                  </div>
                  <div>
                    <dt className={`font-semibold ${theme.text.primary}`}>App development</dt>
                    <dd>React, React Native, Expo, Django, FastAPI, Node.js, Android Studio</dd>
                  </div>
                  <div>
                    <dt className={`font-semibold ${theme.text.primary}`}>Data and AI</dt>
                    <dd>OpenAI APIs, LlamaIndex, vector embeddings, DistilBERT, SBERT, Pandas</dd>
                  </div>
                  <div>
                    <dt className={`font-semibold ${theme.text.primary}`}>Systems and tools</dt>
                    <dd>Firebase, PostgreSQL, Supabase, Docker, Heroku, Vercel, Git, JIRA</dd>
                  </div>
                </dl>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
