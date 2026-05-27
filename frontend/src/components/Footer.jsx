import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme'

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const theme = useTimeBasedTheme()

  return (
    <footer id="contact" className={`${theme.footer} text-white py-10 transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-gray-300 max-w-2xl">
                Open to software roles, freelance web work, and practical product ideas.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Priyanshu Pusola
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="mailto:pusola@ualberta.ca"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              pusola@ualberta.ca
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="tel:8259661673"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Phone"
            >
              (825) 966-1673
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span className="text-gray-300">Edmonton, AB</span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="https://linkedin.com/in/priyanshu-pusola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="https://github.com/PPusola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <a
              href="https://booyaa.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              booyaa.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
