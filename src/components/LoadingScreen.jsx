import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-[3px]"
            >
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">MI</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="mt-6 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              style={{ width: 120 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
