import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PageTransition(){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    gsap.set(el, { opacity: 1 })
    gsap.to(el, { opacity: 0, duration: 0.9, ease: 'power3.inOut' })
    // keep element invisible after mount
    gsap.set(el, { pointerEvents: 'none' })

    function onLinkClick(e){
      const a = e.target.closest('a')
      if(!a) return
      const href = a.getAttribute('href')
      if(!href || href.startsWith('#') || href.startsWith('mailto:') || a.target === '_blank') return
      e.preventDefault()
      // enable pointer events while animating so we block further clicks
      gsap.set(el, { pointerEvents: 'auto' })
      gsap.to(el, { opacity: 1, duration: 0.45, ease: 'power2.inOut', onComplete: ()=>{ window.location.href = href } })
    }
    window.addEventListener('click', onLinkClick)
    return ()=>{ window.removeEventListener('click', onLinkClick) }
  }, [])

  return (
    <div ref={ref} className="fixed inset-0 z-50 pointer-events-none bg-[var(--color-bg)]/95 transition-opacity" />
  )
}
