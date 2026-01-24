import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import initSmoothScroll from './utils/smoothScroll'
import site from './config/site'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// initialize smooth scrolling + ScrollTrigger
// initialize smooth scrolling + ScrollTrigger lazily (desktop only)
if (typeof window !== 'undefined') {
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
  if (!isTouch && window.innerWidth >= 768) {
    import('./utils/smoothScroll').then(m => {
      try { m.default() } catch (e) { /* ignore init errors */ }
    }).catch(()=>{})
  }
}

// apply theme preset from site config
if(site.theme){
  document.documentElement.classList.add(`theme-${site.theme}`)
}
