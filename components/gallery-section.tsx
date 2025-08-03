"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion, AnimatePresence } from "framer-motion"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/4.jpg?height=300&width=400", alt: "Annual Sports Day" },
    { src: "/6.jpg?height=300&width=400", alt: "Science Fair Exhibition" },
    { src: "/17.jpg?height=300&width=400", alt: "Cultural Performance" },
    { src: "/16.jpg?height=300&width=400", alt: "Graduation Ceremony" },
    { src: "/19.jpg?height=300&width=400", alt: "Art Competition" },
    { src: "/15.jpg?height=300&width=400", alt: "Field Trip" },
    { src: "/20.jpg?height=300&width=400", alt: "Independence Day Celebration" },
    { src: "/14.jpg?height=300&width=400", alt: "PTM" },
  ]

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Capturing memorable moments and achievements of our school community
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  initial={false}
                >
                  <motion.span
                    className="text-white font-medium text-center px-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.alt}
                  </motion.span>
                </motion.div>
                <motion.div
                  className="absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-sm">+</span>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated Lightbox */}
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
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-8 h-8" />
                </motion.button>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </motion.div>
                <motion.p
                  className="text-white text-center mt-4 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {images[selectedImage].alt}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
