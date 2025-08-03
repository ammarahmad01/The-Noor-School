"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Parent of Grade 8 Student",
      content:
        "The Noor School has provided exceptional education for my daughter. The teachers are dedicated and the values-based approach has helped shape her character beautifully.",
      rating: 5,
    },
    {
      name: "Dr. Muhammad Ali",
      role: "Parent of Grade 5 Student",
      content:
        "I am impressed with the holistic development approach at The Noor School. My son has not only excelled academically but also grown as a confident individual.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Alumni Parent",
      content:
        "Both my children graduated from The Noor School and are now successful in their careers. The foundation they received here was instrumental in their success.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Grade 12 Student",
      content:
        "The Noor School has been my second home. The supportive environment and excellent teaching have prepared me well for university and beyond.",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from parents and students about their experience at The Noor School
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  >
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.blockquote
                    className="text-lg text-gray-700 mb-6 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    "{testimonials[currentSlide].content}"
                  </motion.blockquote>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="font-semibold text-gray-900">{testimonials[currentSlide].name}</div>
                    <div className="text-gray-600">{testimonials[currentSlide].role}</div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl transition-shadow"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl transition-shadow"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Animated Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentSlide ? 1.25 : 1,
                  backgroundColor: index === currentSlide ? "#2563eb" : "#d1d5db",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
