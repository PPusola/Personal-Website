import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import ProjectCategoryPage from './pages/ProjectCategoryPage'
import ExperiencePage from './pages/ExperiencePage'
import AwardsPage from './pages/AwardsPage'
import HobbiesPage from './pages/HobbiesPage'
import { useTimeBasedTheme } from './hooks/useTimeBasedTheme'

function App() {
  const theme = useTimeBasedTheme()

  return (
    <Router basename="/Personal-Website">
      <div className={`min-h-screen transition-colors duration-500 relative`} style={{ backgroundColor: 'transparent' }}>
        <AnimatedBackground />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:category" element={<ProjectCategoryPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/internships" element={<ExperiencePage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
