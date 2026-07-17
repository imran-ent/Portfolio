import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiServer, HiCollection, HiDeviceMobile, HiCube } from 'react-icons/hi'

const services = [
  {
    title: 'Responsive Website Development',
    description: 'Modern, mobile-first websites that look great on every device with smooth animations and optimal performance.',
    icon: HiDeviceMobile,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Java Backend Development',
    description: 'Robust backend systems using Java and Spring Boot with clean architecture and best practices.',
    icon: HiServer,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'REST API Development',
    description: 'Scalable and well-documented RESTful APIs with proper authentication and error handling.',
    icon: HiCollection,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Frontend Development',
    description: 'Interactive user interfaces built with React, featuring component-based architecture and modern tooling.',
    icon: HiCode,
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Full Stack Web Applications',
    description: 'End-to-end web application development from database design to deployment.',
    icon: HiCube,
    gradient: 'from-orange-500 to-yellow-500',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          What I <span className="gradient-text">Offer</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card group cursor-pointer text-center"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-light mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
