import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'PenMart',
    subtitle: 'Modern E-Commerce Website',
    description: 'A full-featured e-commerce platform with authentication, product management, and a seamless shopping experience.',
    features: ['Authentication', 'Product Listing', 'Responsive UI', 'Shopping Cart', 'Checkout', 'Modern Design'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
  {
    title: 'Jarvis AI Assistant',
    subtitle: 'Voice-Controlled Automation',
    description: 'A Python-based virtual assistant capable of voice commands, task automation, and speech recognition.',
    features: ['Voice Commands', 'Automation', 'Speech Recognition', 'Python'],
    tech: ['Python'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-500',
  },
  {
    title: 'Instagram Vulgar Language Detection',
    subtitle: 'ML-Powered Content Moderation',
    description: 'Machine Learning application detecting offensive language from Instagram Reels using speech-to-text and NLP.',
    features: ['Audio Processing', 'Speech Recognition', 'Machine Learning', 'Flask API'],
    tech: ['Python', 'Flask', 'Whisper', 'NLTK', 'ML'],
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass-card overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}
                  >
                    <HiCode size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-light group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}
                      />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiExternalLink className="text-gray-400 hover:text-primary transition-colors" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
