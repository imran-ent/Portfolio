import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Java Developer',
  'Computer Science Engineering Student',
  'Problem Solver',
  'Web Developer',
  'Java Enthusiast',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((p) => p + 1), 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((p) => p - 1), 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((p) => (p + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium text-lg mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Mohammed{' '}
            <span className="gradient-text">Imran</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-10 mb-6"
          >
            <span className="text-xl sm:text-2xl text-gray-300 font-medium">
              {roles[roleIndex].substring(0, charIndex)}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            I enjoy building scalable web applications and continuously improving my software
            development skills. I'm passionate about Java, Spring Boot, modern web technologies,
            and creating practical solutions through clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <button onClick={() => scrollTo('contact')} className="btn-primary cursor-pointer">
              <span className="flex items-center gap-2">
                <HiDownload size={18} />
                Download Resume
              </span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline cursor-pointer"
            >
              <HiMail size={18} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:imran@example.com"
              aria-label="Email"
              className="p-3 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <HiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-[3px] animate-float">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍💻</div>
                  <div className="gradient-text font-bold text-2xl">MI</div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
