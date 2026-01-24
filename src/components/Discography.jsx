import React, { useState } from 'react'
import artist from '../data/artist'

export default function Discography(){
  const [current, setCurrent] = useState(null)

  return (
    <section id="discography" className="py-32 px-6 bg-gradient-to-b from-black/0 via-black/40 to-black/0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">Discografia</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explore todos os lançamentos e acesse direto no Spotify</p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mt-8" />
        </div>

        {/* Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artist.releases && artist.releases.length ? artist.releases.map((release) => (
            <ReleaseItem key={release.id} release={release} />
          )) : (
            <div className="col-span-full text-center py-12 text-gray-400">
              Nenhum lançamento disponível no momento.
            </div>
          )}
        </div>

        {/* Capas manuais: coloque URLs em src/data/artist.js -> manualCovers */}
        {artist.manualCovers && artist.manualCovers.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Capas (manuais)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {artist.manualCovers.map((c, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black h-40 flex items-center justify-center">
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <img src={c.src} alt={c.alt || `Cover ${idx+1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </a>
                  ) : (
                    <img src={c.src} alt={c.alt || `Cover ${idx+1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Spotify Player Modal */}
        {current && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setCurrent(null)}>
            <div className="bg-black/90 border border-white/10 rounded-2xl p-8 max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Reproduzindo</h3>
                <button onClick={() => setCurrent(null)} className="text-gray-400 hover:text-white transition">✕</button>
              </div>
              <div className="w-full">
                <iframe 
                  title="spotify-player" 
                  src={`https://open.spotify.com/embed/album/${current}`} 
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allowtransparency="true" 
                  allow="encrypted-media" 
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ReleaseItem({ release }){
  const hasImage = release.image && release.image.trim() !== ''
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <article 
      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image or Placeholder */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
        {hasImage ? (
          <img 
            src={release.image} 
            alt={release.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy" 
            decoding="async"
          />
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-2">🎵</div>
            <p className="text-gray-400 text-sm">{release.type}</p>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full space-y-2">
            <a 
              href={`https://open.spotify.com/album/${release.id}`} 
              target="_blank" 
              rel="noreferrer"
              className="block w-full bg-[var(--color-accent)] hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg text-center transition"
            >
              Ouvir no Spotify →
            </a>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-black/60 border-t border-white/5 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg line-clamp-2">{release.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{release.type || 'Release'}</p>
          </div>
          {(/feat|ft\.|with|&/i).test(release.title) && (
            <span className="text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)] px-2 py-1 rounded-full whitespace-nowrap">Collab</span>
          )}
        </div>
      </div>
    </article>
  )
}


