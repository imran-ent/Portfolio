import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#hero" className="text-2xl font-bold gradient-text">
              MI
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Designed & Developed by Mohammed Imran
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:imran@example.com"
              aria-label="Email"
              className="p-2 rounded-full glass text-gray-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <HiMail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-white/5"
        >
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Mohammed Imran. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
