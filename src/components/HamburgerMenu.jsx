import React, { useEffect, useState } from 'react'
import artist from '../data/artist'

export default function HamburgerMenu(){
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    function onKey(e){ if(e.key === 'Escape'){ setOpen(false) } }
    window.addEventListener('keydown', onKey)
    return ()=>{ window.removeEventListener('keydown', onKey) }
  }, [open])

  function closeMenu(){ setOpen(false) }

  return (
    <div>
      {/* Hamburger Button */}
      <button 
        aria-label={open ? 'Fechar menu' : 'Abrir menu'} 
        onClick={() => setOpen(v => !v)} 
        className="md:hidden w-10 h-10 flex flex-col items-center justify-center text-white hover:text-[var(--color-accent)] transition-colors"
      >
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-current my-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/98 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <div 
            className="flex flex-col h-full px-6 pt-24 pb-8 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <nav className="space-y-6 mb-12">
              <a 
                href="#discography" 
                onClick={closeMenu} 
                className="block text-2xl font-bold text-white hover:text-[var(--color-accent)] transition duration-300 transform hover:translate-x-2"
              >
                📀 Discografia
              </a>
              <a 
                href="#projects" 
                onClick={closeMenu} 
                className="block text-2xl font-bold text-white hover:text-[var(--color-accent)] transition duration-300 transform hover:translate-x-2"
              >
                🎵 Jornada
              </a>
            </nav>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            {/* Social Section */}
            <div className="flex-1 flex flex-col justify-end gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Conecte-se</h3>
                <div className="grid grid-cols-2 gap-3">
                  {artist.socials?.spotify && (
                    <a 
                      href={artist.socials.spotify} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-green-600/20 border border-green-500/30 hover:bg-green-600/40 hover:border-green-500/60 transition group"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-12.061-1.573-.479.12-1.02-.12-1.14-.6-.121-.48.12-1.021.6-1.141C9.9 9.9 15.739 10.561 19.921 12.93c.361.21.599.66.301 1.077zm.14-3.4c-3.9-2.3-10.319-2.521-14.021-1.387-.468.121-1.02-.26-1.14-.721-.12-.479.26-1.02.72-1.14C9.077 1.128 15.897 1.348 20.659 4.429c.418.299.599.899.261 1.378-.338.48-.922.599-1.341.261z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-300">Spotify</span>
                    </a>
                  )}
                  
                  {artist.socials?.instagram && (
                    <a 
                      href={artist.socials.instagram} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-pink-600/20 to-red-600/20 border border-pink-500/30 hover:from-pink-600/40 hover:to-red-600/40 hover:border-pink-500/60 transition group"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5 text-pink-400 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-300">Instagram</span>
                    </a>
                  )}
                  
                  {artist.socials?.youtube && (
                    <a 
                      href={artist.socials.youtube} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-red-600/20 border border-red-500/30 hover:bg-red-600/40 hover:border-red-500/60 transition group"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5 text-red-400 group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-300">YouTube</span>
                    </a>
                  )}
                  
                  {artist.socials?.tiktok && (
                    <a 
                      href={artist.socials.tiktok} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition group"
                      onClick={closeMenu}
                    >
                      <svg className="w-5 h-5 text-white group-hover:scale-110 transition" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 5.1-1.75V9.4a6.06 6.06 0 0 0-6.56 5.6 6.06 6.06 0 0 0 6.56 5.6 6.06 6.06 0 0 0 6-6V9.62a8 8 0 0 0 5.15 1.74V7.7a4.84 4.84 0 0 1-3.37-1.01z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-300">TikTok</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Footer Info */}
              <div className="text-center py-6 border-t border-white/5">
                <p className="text-xs text-gray-500">© 2025 {artist.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
