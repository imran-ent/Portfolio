import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgressBar from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <ScrollProgressBar />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Services />
                <Achievements />
                <Timeline />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
