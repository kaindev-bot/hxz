import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Fotos() {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const loadImages = async () => {
            // Dynamically import all images from src/assets/shows
            const modules = import.meta.glob('../assets/shows/*.{png,jpg,jpeg,webp}')

            const loadedImages = []

            for (const path in modules) {
                const module = await modules[path]()
                loadedImages.push(module.default)
            }

            setImages(loadedImages)
        }

        loadImages()
    }, [])

    return (
        <div className="min-h-screen bg-black pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
                            Galeria de Shows
                        </h1>
                        <p className="text-gray-400 max-w-xl">
                            Registros visuais das apresentações e momentos marcantes.
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition text-sm text-gray-300 hover:text-white"
                    >
                        Voltar para Home
                    </Link>
                </div>

                {/* Gallery Grid */}
                {images.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5">
                        <p className="text-gray-400">Nenhuma foto adicionada ainda.</p>
                    </div>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-xl bg-gray-900"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Show gallery ${index + 1}`}
                                    className="w-full h-auto transform transition duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-h-[90vh] max-w-full rounded shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
