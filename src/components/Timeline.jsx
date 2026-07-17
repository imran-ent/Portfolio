import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  { year: '2020', title: 'Started Programming', subtitle: 'Began my coding journey' },
  { year: '2021', title: 'Learned C++', subtitle: 'Object-oriented programming fundamentals' },
  { year: '2022', title: 'Learned Python', subtitle: 'Scripting and automation' },
  { year: '2023', title: 'Learned Java', subtitle: 'Enterprise development' },
  { year: '2024', title: 'Web Development', subtitle: 'HTML, CSS, JavaScript, React' },
  { year: '2025', title: 'Machine Learning Projects', subtitle: 'NLP and audio processing' },
  { year: '2026', title: 'Software Engineering Internship', subtitle: 'Colan Infotech Pvt Ltd' },
  { year: 'Now', title: 'Learning Spring Boot', subtitle: 'Full stack mastery', current: true },
]

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="timeline" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary -translate-x-1/2" />

          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:flex md:w-1/2" />

              <div className="relative z-10 shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                    event.current
                      ? 'bg-gradient-to-r from-primary to-accent border-transparent text-white shadow-lg shadow-primary/30'
                      : 'bg-dark border-primary/30 text-primary'
                  }`}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className={`flex-1 glass-card ${
                  event.current ? 'border-primary/30 shadow-primary/5 shadow-lg' : ''
                }`}
              >
                <span className="text-sm text-primary font-medium">{event.year}</span>
                <h3 className="text-lg font-bold text-light mt-1">{event.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{event.subtitle}</p>
                {event.current && (
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">
                    Currently here
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
