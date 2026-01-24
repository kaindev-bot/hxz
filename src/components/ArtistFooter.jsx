import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import artist from '../data/artist'

export default function ArtistFooter(){
  const ref = useRef()
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if(!el) return

    // Trigger hero boost animation
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      end: 'bottom 30%',
      scrub: true,
      onUpdate(self){
        const val = (self.progress * 1).toFixed(3)
        document.documentElement.style.setProperty('--hero-boost', val)
      }
    })

    return ()=>{ st.kill(); document.documentElement.style.setProperty('--hero-boost', '0') }
  }, [])

  return (
    <footer ref={ref} className="relative py-24 px-6 bg-gradient-to-t from-black via-black/50 to-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{artist.name}</h2>
            <p className="text-gray-400 text-sm"></p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Redes Sociais</h3>
            <div className="flex items-center gap-3">
              {/* Spotify */}
              {artist.socials?.spotify && (
                <a 
                  href={artist.socials.spotify} 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
                  title="Spotify"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.5c-1.1 1.8-3.4 2.5-5.5 2.5-3.5 0-6.5-2.5-6.5-5.5 0-1.1.3-2.1.8-3h-1.3v6.5c0 1 .8 1.8 1.8 1.8h13c1 0 1.8-.8 1.8-1.8v-6.5h-1.3c.5.9.8 1.9.8 3 0 3-2.5 5.5-5.5 5.5zm-4-6.8c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4 0c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" />
                  </svg>
                </a>
              )}
              
              {/* Instagram */}
              {artist.socials?.instagram && (
                <a 
                  href={artist.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.453 3.29 3.312 3.29 1.860 0 3.312-1.45 3.312-3.29 0-1.821-1.452-3.29-3.312-3.29-1.860 0-3.312 1.469-3.312 3.29zm8.608-6.596c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.795-.645-1.44-1.44-1.44-.795 0-1.44.645-1.44 1.44z" />
                  </svg>
                </a>
              )}
              
              {/* YouTube */}
              {artist.socials?.youtube && (
                <a 
                  href={artist.socials.youtube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
                  title="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
              
              {/* TikTok */}
              {artist.socials?.tiktok && (
                <a 
                  href={artist.socials.tiktok} 
                  target="_blank" 
                  rel="noreferrer"
                  className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black text-white hover:shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-110 border border-white/20"
                  title="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v12.12a2.06 2.06 0 0 1-2.1 2.05 2.06 2.06 0 0 1-2-2.05 2.06 2.06 0 0 1 2-2.05 1.54 1.54 0 0 1 .76.2v-3.4a5.62 5.62 0 0 0-.9-.08A5.1 5.1 0 0 0 5 13.75a5.1 5.1 0 0 0 5.1 5.1 5.1 5.1 0 0 0 5.1-5.1V9.88a7.12 7.12 0 0 0 4.25 1.4V7.9a4.3 4.3 0 0 1-.66-.05z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Contato</h3>
            <p className="text-gray-400 text-sm">Para bookings e parcerias</p>
            <p className="text-[var(--color-accent)] font-semibold mt-2">silvahxz@email.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 {artist.name}. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none opacity-5">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s-7.5-4.35-9.25-6.05C.84 12.74 1.5 7.5 6 5.79 8.05 4.88 10.27 6 12 7.6c1.73-1.6 3.95-2.72 6-1.81 4.5 1.71 5.17 6.95 3.25 9.16C19.5 16.65 12 21 12 21z" fill="currentColor" />
        </svg>
      </div>
    </footer>
  )
}
