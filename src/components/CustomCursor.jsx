import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor(){
  const cursor = useRef()
  useEffect(()=>{
    const el = cursor.current
    gsap.set(el, { xPercent: -50, yPercent: -50, scale: 1 })

    function move(e){
      gsap.to(el, { x: e.clientX, y: e.clientY, duration: 0.14, ease: 'expo.out' })
    }
    function onDown(){ gsap.to(el, { scale: 0.9, duration: 0.12 }) }
    function onUp(){ gsap.to(el, { scale: 1, duration: 0.12 }) }

    function onPreviewOver(e){
      const target = e.target.closest('.preview-indicator') || e.target.closest('.card') || e.target.closest('.project-card')
      if(target){
        gsap.to(el, { scale: 1.8, backgroundColor: 'rgba(255,255,255,0.95)', duration: 0.12 })
      }
    }
    function onPreviewOut(e){
      const target = e.target.closest('.preview-indicator') || e.target.closest('.card') || e.target.closest('.project-card')
      if(target){
        gsap.to(el, { scale: 1, backgroundColor: 'var(--color-accent)', duration: 0.12 })
      }
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    window.addEventListener('pointerover', onPreviewOver, { passive: true })
    window.addEventListener('pointerout', onPreviewOut, { passive: true })

    // hide on touch devices
    if(('ontouchstart' in window) || navigator.maxTouchPoints > 0){ el.style.display = 'none' }

    return ()=>{
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointerover', onPreviewOver)
      window.removeEventListener('pointerout', onPreviewOut)
    }
  }, [])

  return (
    <div ref={cursor} className="pointer-events-none fixed z-[9999] w-8 h-8 rounded-full bg-[var(--color-accent)] mix-blend-screen opacity-90" style={{ transform: 'translate3d(0,0,0)' }} />
  )
}
