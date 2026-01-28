import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import artist from '../data/artist'

export default function Hero() {
  const containerRef = useRef()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Entry animation
    gsap.from(containerRef.current, {
      y: 20,
      duration: 1.0,
      ease: 'power3.out'
    })

    setHasMounted(true)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background image - Desktop Only */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="hxz.jpg"
          alt="Artist Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Text content - Crystal clear */}
      <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl">
        {/* Artist name */}
        <h1
          className="text-5xl md:text-7xl font-black hero-pin-title"
          style={{
            color: '#ffffff',
            textShadow: '0 8px 32px rgb(56, 43, 43), 0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)',
            letterSpacing: '0.05em'
          }}
        >
          {artist.name}
        </h1>

        {/* Tagline */}
        <p
          className="mt-6 text-xl md:text-2xl font-bold text-white"
          style={{
            textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 3px 12px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.02em'
          }}
        >
          Música • Produção • Shows
        </p>
      </div>

    </section>
  )
}
