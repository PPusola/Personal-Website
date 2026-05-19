import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 ${theme.text.primary} leading-tight`}>
            Hi, I'm Priyanshu Pusola
          </h1>

          <div className="space-y-6 mb-12">
            <p className={`text-xl md:text-2xl ${theme.text.secondary} leading-relaxed`}>
              Software Developer & Founder at{' '}
              <a
                href="https://booyaa.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline font-semibold"
              >
                booyaa.net
              </a>
            </p>
            <p className={`text-lg ${theme.text.muted} leading-relaxed`}>
              Passionate about building innovative web applications, AI-powered tools, and scalable systems.
              Computer Science graduate (Minor in Economics) from the University of Alberta — Dec. 2025.
            </p>
          </div>

          <div className={`${theme.card} rounded-2xl ${theme.shadow} p-8 border ${theme.border} mb-8`}>
            <h2 className={`text-2xl font-bold mb-6 ${theme.text.primary}`}>About Me</h2>
            <div className={`space-y-4 ${theme.text.secondary} text-lg leading-relaxed`}>
              <p>
                I'm a software developer with a passion for full-stack web development, AI/ML, and functional testing.
                Through co-ops at BlackBerry QNX and Newgen Software, I've shipped production code across embedded systems,
                REST APIs, and LLM-powered applications.
              </p>
              <p>
                I recently launched{' '}
                <a
                  href="https://booyaa.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline font-medium"
                >
                  booyaa.net
                </a>
                , a freelance web development business where I build professional websites for clients —
                handling everything from UI/UX and branding to SEO and contact forms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Education</h3>
              <p className={`${theme.text.secondary} mb-1`}>
                <span className="font-semibold">University of Alberta</span>
              </p>
              <p className={`${theme.text.muted} text-sm mb-1`}>
                Bachelor of Computer Science
              </p>
              <p className={`${theme.text.muted} text-sm mb-1`}>
                Minor in Economics
              </p>
              <p className={`${theme.text.muted} text-sm mb-2`}>
                Graduated: December 2025
              </p>
              <p className={`${theme.text.muted} text-sm`}>Edmonton, AB</p>
              <div className={`mt-3 pt-3 border-t ${theme.border} space-y-1`}>
                <p className={`text-xs ${theme.text.muted}`}>
                  • UAlberta International Country Scholarship (2022)
                </p>
                <p className={`text-xs ${theme.text.muted}`}>
                  • International Student Scholarship (2022)
                </p>
                <p className={`text-xs ${theme.text.muted}`}>
                  • ODSC Agentic AI Conference Attendee (2025)
                </p>
              </div>
            </div>

            <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
              <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:pusola@ualberta.ca"
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  pusola@ualberta.ca
                </a>
                <a
                  href="tel:8259661673"
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  (825) 966-1673
                </a>
                <a
                  href="https://linkedin.com/in/priyanshu-pusola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  linkedin.com/in/priyanshu-pusola
                </a>
                <a
                  href="https://github.com/PPusola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  github.com/PPusola
                </a>
                <a
                  href="https://booyaa.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${theme.text.secondary} hover:text-primary-600 transition-colors`}
                >
                  booyaa.net
                </a>
              </div>
            </div>
          </div>

          <div className={`${theme.card} rounded-xl ${theme.shadow} p-6 border ${theme.border}`}>
            <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary}`}>Technical Skills</h3>
            <div className={`space-y-3 ${theme.text.secondary} text-sm`}>
              <div>
                <span className="font-semibold">Languages: </span>
                Python (Expert), JavaScript, Java, C, SQL (PostgreSQL), HTML/CSS
              </div>
              <div>
                <span className="font-semibold">AI & ML: </span>
                OpenAI GPT Fine-Tuning, LlamaIndex, Vector Embeddings, TensorFlow, Gradio
              </div>
              <div>
                <span className="font-semibold">Frameworks: </span>
                React.js, React Native (Expo), Django, Flask, Node.js, Express.js, Android Studio
              </div>
              <div>
                <span className="font-semibold">Cloud & Tools: </span>
                Firebase (Realtime DB, Firestore, Auth, FCM), Heroku, Docker, Git, CI/CD, Linux
              </div>
              <div>
                <span className="font-semibold">Concepts: </span>
                REST APIs, HTTP Basic Auth, Agile/SCRUM, Functional & Regression Testing, JIRA, SDLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
