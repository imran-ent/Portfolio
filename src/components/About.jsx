import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Java', 'Spring Boot', 'REST APIs', 'React', 'JavaScript',
  'HTML', 'CSS', 'Tailwind CSS', 'SQL', 'Git & GitHub',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[3px]">
                <div className="w-full h-full rounded-2xl bg-dark flex items-center justify-center">
                  <span className="text-8xl">👨‍🎓</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-primary/30">
                {new Date().getFullYear() - 2024}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-primary font-semibold">Mohammed Imran</span>, currently
              pursuing a B.Tech in Computer Science and Engineering.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about software engineering, full stack web development, and backend
              development using Java. I enjoy learning new technologies, solving real-world problems,
              and building projects that improve my practical skills.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently focusing on:
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  className="px-3 py-1.5 text-sm rounded-full glass text-gray-300 border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed mt-4">
              I'm continuously working towards becoming an industry-ready{' '}
              <span className="text-secondary font-semibold">Full Stack Java Developer</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
