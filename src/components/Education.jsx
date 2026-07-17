import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap } from 'react-icons/hi'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white shrink-0">
              <HiAcademicCap size={28} />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-light">
                B.Tech Computer Science Engineering
              </h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
                  Currently Pursuing
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                  Expected Graduation: June 2028
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pursuing a Bachelor's degree in Computer Science and Engineering with a focus on
                software development, algorithms, and modern web technologies. Building a strong
                foundation in computer science principles while actively working on real-world
                projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
