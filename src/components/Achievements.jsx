import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiCode, HiAcademicCap, HiBriefcase, HiLightningBolt } from 'react-icons/hi'

const stats = [
  { icon: HiCode, label: 'Projects Completed', value: 10, suffix: '+' },
  { icon: HiAcademicCap, label: 'Technologies Learned', value: 20, suffix: '+' },
  { icon: HiBriefcase, label: 'Internship Experience', value: 1, suffix: ' Year' },
  { icon: HiLightningBolt, label: 'Continuous Learning', value: 100, suffix: '%' },
]

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, inView])

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <span className="gradient-text">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                  <Icon size={24} />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
