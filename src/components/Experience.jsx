import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCheck } from 'react-icons/hi'

const responsibilities = [
  'Learning enterprise software development',
  'Building web applications',
  'Working with modern development workflows',
  'Collaborating on real-world software projects',
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="pl-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white shrink-0">
                <HiBriefcase size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-light">
                  Software Engineer Intern
                </h3>
                <p className="text-primary font-medium text-lg mt-1">
                  Colan Infotech Pvt Ltd
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {responsibilities.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <HiCheck className="text-primary shrink-0" size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
