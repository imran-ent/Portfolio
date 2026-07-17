import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaNodeJs, FaGitAlt, FaPython,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiSpringboot, SiMysql, SiPostman, SiIntellijidea, SiVite,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { DiCode } from 'react-icons/di'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90, icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 85, icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', level: 80, icon: FaJs, color: '#F7DF1E' },
      { name: 'React', level: 75, icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', level: 80, icon: FaBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', level: 85, icon: FaJava, color: '#007396' },
      { name: 'Spring Boot', level: 70, icon: SiSpringboot, color: '#6DB33F' },
      { name: 'REST API', level: 75, icon: null, color: '#8B5CF6' },
      { name: 'Node.js (Basic)', level: 50, icon: FaNodeJs, color: '#339933' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 85, icon: FaJava, color: '#007396' },
      { name: 'Python', level: 75, icon: FaPython, color: '#3776AB' },
      { name: 'C++', level: 70, icon: DiCode, color: '#00599C' },
      { name: 'JavaScript', level: 80, icon: FaJs, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MySQL', level: 75, icon: SiMysql, color: '#4479A1' },
      { name: 'Git', level: 80, icon: FaGitAlt, color: '#F05032' },
      { name: 'VS Code', level: 90, icon: VscVscode, color: '#007ACC' },
      { name: 'IntelliJ IDEA', level: 75, icon: SiIntellijidea, color: '#000000' },
      { name: 'Postman', level: 70, icon: SiPostman, color: '#FF6C37' },
      { name: 'Vite', level: 70, icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Responsive Design', level: 85, icon: null, color: '#06B6D4' },
      { name: 'OOP', level: 80, icon: null, color: '#8B5CF6' },
      { name: 'Data Structures', level: 75, icon: null, color: '#3B82F6' },
      { name: 'Problem Solving', level: 80, icon: null, color: '#10B981' },
    ],
  },
]

function SkillCard({ category, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card"
    >
      <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div key={skill.name}>
              <div className="flex items-center gap-2 mb-1.5">
                {Icon && <Icon style={{ color: skill.color }} size={16} />}
                <span className="text-sm text-gray-300">{skill.name}</span>
                <span className="ml-auto text-xs text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Technologies and tools I work with
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
