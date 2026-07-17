import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      setSent(true)
      formRef.current.reset()
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-light mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind or just want to say hi? Fill out the form and I'll get back
                to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <HiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:imran@example.com" className="text-light hover:text-primary transition-colors">
                    imran@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
                    linkedin.com/in/mohammedimran
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
                    github.com/mohammedimran
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <HiLocationMarker size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-light">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center cursor-pointer disabled:opacity-50"
              >
                <span className="flex items-center gap-2">
                  {sending ? (
                    'Sending...'
                  ) : sent ? (
                    'Sent! ✓'
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane size={16} className="rotate-90" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
