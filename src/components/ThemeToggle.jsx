import { useEffect, useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [dark])

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="p-2 rounded-full glass text-light dark:text-light hover:border-primary/50 transition-colors cursor-pointer"
    >
      {dark ? <HiSun size={20} /> : <HiMoon size={20} className="text-gray-800" />}
    </motion.button>
  )
}
