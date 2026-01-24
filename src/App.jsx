import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Discography from './components/Discography'
import Projects from './components/Projects'
import BottomPlayer from './components/BottomPlayer'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'
import ArtistFooter from './components/ArtistFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <PageTransition />
      <CustomCursor />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <Hero />
        
        {/* Main Content */}
        <div className="bg-black">
          {/* Discography */}
          <Discography />
          
          {/* Projects */}
          <Projects />
        </div>
        
        {/* Bottom Player */}
        <BottomPlayer />
        
        {/* Footer */}
        <ArtistFooter />
      </main>
    </div>
  )
}
