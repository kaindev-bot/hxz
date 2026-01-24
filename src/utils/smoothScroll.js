import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function initSmoothScroll(){
  gsap.registerPlugin(ScrollTrigger)

  // don't enable smooth scroll on mobile or touch devices
  const isTouch = (typeof window !== 'undefined') && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  if(isTouch) return

  const isMobile = window.innerWidth < 768
  if(isMobile) return

  // Just register ScrollTrigger, no Lenis (was causing freeze)
  try {
    ScrollTrigger.refresh()
  } catch(e) {
    console.warn('ScrollTrigger init error:', e.message)
  }
}
