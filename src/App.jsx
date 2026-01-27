import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Fotos from './components/fotos'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <PageTransition />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotos" element={<Fotos />} />
      </Routes>
    </div>
  )
}
