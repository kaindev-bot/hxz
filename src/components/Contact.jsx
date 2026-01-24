import React from 'react'
import artist from '../data/artist'

export default function Contact(){
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black via-black/80 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-gray-300">Para bookings, parcerias e colaborações, entre em contato</p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mt-8" />
        </div>

        {/* Social Links with Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {/* Spotify */}
          {artist.socials?.spotify && (
            <a 
              href={artist.socials.spotify} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/30 to-green-600/20 flex items-center justify-center group-hover:from-green-400/50 group-hover:to-green-600/40 transition">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.5c-1.1 1.8-3.4 2.5-5.5 2.5-3.5 0-6.5-2.5-6.5-5.5 0-1.1.3-2.1.8-3h-1.3v6.5c0 1 .8 1.8 1.8 1.8h13c1 0 1.8-.8 1.8-1.8v-6.5h-1.3c.5.9.8 1.9.8 3 0 3-2.5 5.5-5.5 5.5zm-4-6.8c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4 0c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-[var(--color-accent)] transition">Spotify</span>
            </a>
          )}

          {/* Instagram */}
          {artist.socials?.instagram && (
            <a 
              href={artist.socials.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/30 to-rose-600/20 flex items-center justify-center group-hover:from-pink-500/50 group-hover:to-rose-600/40 transition">
                <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.453 3.29 3.312 3.29 1.860 0 3.312-1.45 3.312-3.29 0-1.821-1.452-3.29-3.312-3.29-1.860 0-3.312 1.469-3.312 3.29zm8.608-6.596c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.795-.645-1.44-1.44-1.44-.795 0-1.44.645-1.44 1.44z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-[var(--color-accent)] transition">Instagram</span>
            </a>
          )}

          {/* YouTube */}
          {artist.socials?.youtube && (
            <a 
              href={artist.socials.youtube} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 flex items-center justify-center group-hover:from-red-500/50 group-hover:to-red-600/40 transition">
                <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-[var(--color-accent)] transition">YouTube</span>
            </a>
          )}

          {/* TikTok */}
          {artist.socials?.tiktok && (
            <a 
              href={artist.socials.tiktok} 
              target="_blank" 
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition transform hover:scale-110"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black/50 to-gray-700/30 flex items-center justify-center group-hover:from-black/70 group-hover:to-gray-700/50 transition border border-white/20">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v12.12a2.06 2.06 0 0 1-2.1 2.05 2.06 2.06 0 0 1-2-2.05 2.06 2.06 0 0 1 2-2.05 1.54 1.54 0 0 1 .76.2v-3.4a5.62 5.62 0 0 0-.9-.08A5.1 5.1 0 0 0 5 13.75a5.1 5.1 0 0 0 5.1 5.1 5.1 5.1 0 0 0 5.1-5.1V9.88a7.12 7.12 0 0 0 4.25 1.4V7.9a4.3 4.3 0 0 1-.66-.05z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-[var(--color-accent)] transition">TikTok</span>
            </a>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-24 text-center space-y-4">
          <p className="text-gray-400">E-mail: <a href="mailto:silvahxz@email.com" className="text-[var(--color-accent)] hover:text-opacity-80 transition">silvahxz@email.com</a></p>
          <p className="text-gray-400">Brasil</p>
        </div>
      </div>
    </section>
  )
}
