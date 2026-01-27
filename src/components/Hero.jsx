import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import artist from '../data/artist'
import CrownModel from './CrownModel'

export default function Hero() {
  const containerRef = useRef()
  const pointerRef = useRef({ x: 0, y: 0 })
  const scrollProgressRef = useRef(0)
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

    // Handle pointer movement with throttling for crown interaction
    let lastPointerUpdate = 0
    function onPointerMove(e) {
      const now = Date.now()
      if (now - lastPointerUpdate < 16) return // ~60fps throttle
      lastPointerUpdate = now

      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      pointerRef.current.x = x
      pointerRef.current.y = y
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background image - Normal brightness */}
      <div
        className="absolute inset-0 -z-50"
        style={{
          backgroundImage: 'url("src/assets/hxz.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

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
