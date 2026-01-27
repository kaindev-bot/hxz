import React from 'react'
import Hero from './Hero'
import Discography from './Discography'
import Projects from './Projects'
import BottomPlayer from './BottomPlayer'
import ArtistFooter from './ArtistFooter'

export default function Home() {
    return (
        <>
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
        </>
    )
}
