import React, { useRef } from 'react'
import artist from '../data/artist'

export default function ReleaseCard({ release, onOpen }){
  const audioRef = useRef(null)
  const previewTimer = useRef(null)

  function playPreview(){
    const url = release.preview_url || release.previewUrl || release.preview || null
    if(url){
      if(!audioRef.current){
        audioRef.current = new Audio(url)
        audioRef.current.crossOrigin = 'anonymous'
        audioRef.current.volume = 0.12
      }
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(()=>{})
      previewTimer.current = setTimeout(()=>{ audioRef.current && audioRef.current.pause() }, 14000)
    }
  }

  function stopPreview(){
    if(audioRef.current){ audioRef.current.pause(); audioRef.current.currentTime = 0 }
    if(previewTimer.current){ clearTimeout(previewTimer.current); previewTimer.current = null }
  }

  const cover = release.image || release.images?.[0]?.url || artist.featuredCover || artist.image

  return (
    <article className="card release-card p-4 rounded-xl shadow-md overflow-hidden">
      <div className="flex gap-4 items-start">
        <div className="w-28 h-28 flex-shrink-0 rounded overflow-hidden bg-gray-800">
          <img src={cover} alt={release.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{release.title}</h3>
              <div className="text-xs text-gray-400 mt-1">{release.type || 'Release'}{release.release_date ? ` • ${release.release_date}` : ''}</div>
            </div>
            <div className="flex flex-col items-end gap-2">
              {(/feat|ft\.|with|&/i).test(release.title) ? <span className="project-badge collab-badge">Collab</span> : null}
              <div className="flex gap-2">
                <button onMouseEnter={playPreview} onMouseLeave={stopPreview} onClick={playPreview} className="btn-accent text-sm">Preview</button>
                <a className="text-sm text-gray-300 underline" href={`https://open.spotify.com/album/${release.id}`} target="_blank" rel="noreferrer">Spotify</a>
                {onOpen ? (<button onClick={() => onOpen(release.id)} className="text-sm text-gray-300 underline">Abrir</button>) : null}
              </div>
            </div>
          </div>
          {release.description ? <p className="mt-3 text-sm text-gray-300">{release.description}</p> : null}
        </div>
      </div>
    </article>
  )
}
