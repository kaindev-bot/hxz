import React from 'react'
import artist from '../data/artist'

export default function BottomPlayer(){
  return (
    <div className="fixed bottom-4 left-4 md:left-auto md:right-8 md:bottom-8 z-50">
      <div className="bg-black/60 backdrop-blur border border-black/30 rounded-full p-2 flex items-center gap-3 shadow-lg">
        <img src={artist.image} alt={artist.name} className="w-10 h-10 rounded" />
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{artist.name}</div>
          <a href={artist.socials.spotify} target="_blank" rel="noreferrer" className="text-xs text-gray-300 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.95 13.74a.75.75 0 0 1-1.04.24c-2.84-1.72-6.41-2.12-10.6-1.2a.75.75 0 1 1-.34-1.46c4.57-1.07 8.66-.59 11.92 1.4a.75.75 0 0 1 .24 1.02zM17.2 10.9a.75.75 0 0 1-1.02.36c-2.58-1.5-6.51-1.95-9.56-1.11a.75.75 0 0 1-.4-1.44c3.36-.94 7.7-.41 10.7 1.36a.75.75 0 0 1 .28 1.03zM15.5 8.13a.9.9 0 0 1-1.2.44C12.27 6.97 7.9 6.66 5.64 7.26c-.52.14-1.03-.18-1.17-.7a.9.9 0 0 1 .7-1.06c2.68-.77 7.77-.41 10.75 1.07.45.26.62.85.03 1.66z"/></svg>
            <span>Ouvir no Spotify</span>
          </a>
        </div>
      </div>
    </div>
  )
}
