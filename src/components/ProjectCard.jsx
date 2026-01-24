import React, { useRef } from 'react'

export default function ProjectCard({ project }){
  const audioRef = useRef(null)
  const previewTimer = useRef(null)

  function playPreview(){
    if(project.preview){
      if(!audioRef.current){
        audioRef.current = new Audio(project.preview)
        audioRef.current.volume = 0.12
        audioRef.current.crossOrigin = 'anonymous'
      }
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(()=>{})
      previewTimer.current = setTimeout(()=>{ audioRef.current && audioRef.current.pause() }, 12000)
    } else {
      // fallback tone
      try{
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const o = ctx.createOscillator()
        const g = ctx.createGain()
        o.type = 'sine'
        o.frequency.value = 330
        g.gain.value = 0.05
        o.connect(g); g.connect(ctx.destination)
        o.start()
        setTimeout(()=>{ o.stop(); ctx.close() }, 700)
      }catch(e){}
    }
  }

  function stopPreview(){
    if(audioRef.current){audioRef.current.pause(); audioRef.current.currentTime=0}
    if(previewTimer.current){ clearTimeout(previewTimer.current); previewTimer.current = null }
  }
  return (
    <>
    <article className="project-card bg-[rgba(255,255,255,0.03)] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] relative">
      <a href="#" className="block group" onMouseEnter={() => playPreview()} onMouseLeave={() => stopPreview()}>
        <div className="h-48 md:h-56 bg-gray-200 overflow-hidden">
          <picture>
            <source srcSet={`${project.image}?fm=webp`} type="image/webp" />
            <img loading="lazy" decoding="async" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </picture>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <div className="flex items-center gap-2">
              {(project.tags || []).map((t) => (
                <span key={t} className={`project-badge ${t === 'Collab' ? 'collab-badge' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
          {project.description ? (
            <p className="text-sm text-gray-400 mb-3">{project.description}</p>
          ) : null}
        </div>
      </a>
      {project.preview ? (
        <div className="preview-indicator">preview</div>
      ) : null}
    </article>
    </>
  )
}
