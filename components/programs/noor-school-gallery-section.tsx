"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Camera, X } from "lucide-react"

export default function NoorSchoolGallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/4.jpg?height=320&width=480", alt: "Annual Sports Day" },
    { src: "/6.jpg?height=320&width=480", alt: "Science Fair Exhibition" },
    { src: "/17.jpg?height=320&width=480", alt: "Cultural Performance" },
    { src: "/16.jpg?height=320&width=480", alt: "Graduation Ceremony" },
    { src: "/19.jpg?height=320&width=480", alt: "Art Competition" },
    { src: "/15.jpg?height=320&width=480", alt: "Field Trip" },
    { src: "/20.jpg?height=320&width=480", alt: "Independence Day Celebration" },
    { src: "/14.jpg?height=320&width=480", alt: "Parent Teacher Meeting" },
  ]

  return (
    <section id="noor-school-gallery" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-24 -right-16 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Signature Events & Moments
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Noor School Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Highlights from our annual events, celebrations, and student achievements across The Noor School campus.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={480}
                height={320}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold drop-shadow-md">{image.alt}</span>
                <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                >
                  <X className="w-8 h-8" />
                </button>
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
                <p className="text-white text-center mt-4 text-lg">{images[selectedImage].alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}