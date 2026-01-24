import React from 'react'
import artist from '../data/artist'
import HamburgerMenu from './HamburgerMenu'

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition">
          <span className="text-xl font-bold text-white tracking-tight">{artist.name}</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#discography" className="text-gray-300 hover:text-white transition text-sm">Discografia</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition text-sm">Jornada</a>
        </nav>

        {/* Mobile Menu */}
        <HamburgerMenu />
      </div>
    </header>
  )
}