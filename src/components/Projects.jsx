import React, { useEffect, useRef, useMemo } from 'react'
import artist from '../data/artist'
import news from '../data/news'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects(){
  const containerRef = useRef(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    // Timeline animation
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      })
    })
  }, [])

  // Combine releases and news, sort by date
  const timeline = useMemo(() => {
    const items = [
      // Releases
      ...artist.releases.map(r => ({
        ...r,
        type: 'lançamento',
        timestamp: new Date(r.date + '-01-01').getTime(),
        source: 'spotify'
      })),
      // News
      ...news
    ]
    // Sort by date (newest first)
    return items.sort((a, b) => b.timestamp - a.timestamp)
  }, [])

  const getTypeIcon = (type) => {
    const icons = {
      lançamento: '🎵',
      show: '🎤',
      parceria: '🤝',
      anúncio: '📢',
      notícia: '📰'
    }
    return icons[type] || '✨'
  }

  const getTypeColor = (type) => {
    const colors = {
      lançamento: 'from-blue-500/20 to-blue-600/10 text-blue-300 border-blue-500/30',
      show: 'from-purple-500/20 to-purple-600/10 text-purple-300 border-purple-500/30',
      parceria: 'from-green-500/20 to-green-600/10 text-green-300 border-green-500/30',
      anúncio: 'from-yellow-500/20 to-yellow-600/10 text-yellow-300 border-yellow-500/30',
      notícia: 'from-pink-500/20 to-pink-600/10 text-pink-300 border-pink-500/30'
    }
    return colors[type] || 'from-gray-500/20 to-gray-600/10 text-gray-300 border-gray-500/30'
  }

  const formatDate = (date) => {
    const d = new Date(date)
    return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <section id="projects" ref={containerRef} className="py-12 px-6 bg-gradient-to-b from-black via-black to-black/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Jornada do Artista</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">Acompanhe os lançamentos e novidades</p>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item.id} className="timeline-item">
                <div className={`flex gap-4 items-stretch ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot (hidden on mobile) */}
                  <div className="hidden md:flex md:w-1/2 md:justify-center md:relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[var(--color-accent)] rounded-full border-2 border-black z-10 top-4" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-gradient-to-br ${getTypeColor(item.type)} border rounded p-3 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
                      {/* Date & Badge */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-lg">{getTypeIcon(item.type)}</span>
                        <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">
                          {formatDate(item.date || item.eventDate)}
                        </span>
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded capitalize`}>
                          {item.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.description}</p>

                      {/* Extra Info (show, parceria, etc) */}
                      <div className="space-y-2 text-sm text-gray-400 mb-4">
                        {item.venue && <div>📍 <strong>{item.venue}</strong> - {item.location}</div>}
                        {item.eventDate && <div>🗓️ {formatDate(item.eventDate)}</div>}
                        {item.capacity && <div>👥 {item.capacity}</div>}
                        {item.collaborators && <div>🤝 {item.collaborators.join(', ')}</div>}
                        {item.stats && (
                          <div>
                            {item.stats.streams && <span>🎵 {item.stats.streams} streams</span>}
                            {item.stats.likes && <span> • ❤️ {item.stats.likes} likes</span>}
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition"
                        >
                          {item.source === 'spotify' ? '🎵 Ouvir' : '🔗 Acessar'}
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      )}

                      {/* Source badge */}
                      <div className="mt-3 text-xs text-gray-500">
                        Fonte: <strong className="capitalize">{item.source}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-1/4 w-80 h-80 opacity-5 bg-gradient-to-br from-[var(--color-accent)] to-transparent rounded-full blur-3xl" />
    </section>
  )
}
