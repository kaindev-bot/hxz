import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import artist from '../data/artist'
import { Link } from 'react-router-dom'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const menuVariants = {
    initial: {
      opacity: 0,
      clipPath: "circle(0% at 95% 5%)"
    },
    animate: {
      opacity: 1,
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Custom ease for "premium" feel
      }
    },
    exit: {
      clipPath: "circle(0% at 95% 5%)",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  }

  const linkContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      }
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1]
      }
    }
  }

  const socialVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 group"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-8 h-0.5 bg-white group-hover:bg-[var(--color-accent)] transition-colors origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="w-8 h-0.5 bg-white group-hover:bg-[var(--color-accent)] transition-colors"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-8 h-0.5 bg-white group-hover:bg-[var(--color-accent)] transition-colors origin-center"
        />
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col justify-between p-8"
          >
            {/* Background noise/texture optional */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="flex-1 flex flex-col justify-center">
              <motion.div
                variants={linkContainerVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {[
                  { title: "Discografia", href: "/#discography" },
                  { title: "Galeria de Fotos", href: "/fotos" }
                ].map((item, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <motion.div variants={linkVariants}>
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="text-4xl sm:text-5xl font-bold text-white/90 hover:text-[var(--color-accent)] transition-colors tracking-tight inline-block"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Footer / Socials */}
            <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
                className="text-white/40 text-sm uppercase tracking-widest font-medium"
              >
                Siga-me
              </motion.div>

              <div className="flex flex-wrap gap-6 md:gap-8">
                {[
                  { key: 'spotify', label: 'Spotify' },
                  { key: 'instagram', label: 'Instagram' },
                  { key: 'youtube', label: 'YouTube' },
                  { key: 'tiktok', label: 'TikTok' }
                ].map((social, i) => {
                  if (!artist.socials || !artist.socials[social.key]) return null;
                  return (
                    <motion.a
                      key={social.key}
                      custom={i}
                      variants={socialVariants}
                      initial="initial"
                      animate="animate"
                      href={artist.socials[social.key]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-white/50 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      {social.label}
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
