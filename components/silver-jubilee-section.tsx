"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Sparkles, Trophy } from "lucide-react"
import Image from "next/image"

export default function SilverJubileeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
              >
                <Award className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">Silver Jubilee Celebration</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                25 Years of Educational Excellence
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From a small initiative in 2001 to a comprehensive educational system today — Noor has remained committed to values-driven education, affordability, and community trust.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Trophy, text: "Thousands of successful graduates contributing to society" },
                  { icon: Sparkles, text: "Consistent academic excellence and character development" },
                  { icon: Calendar, text: "A quarter-century of unwavering commitment to quality education" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-yellow-300" />
                    </div>
                    <p className="text-lg text-white/90">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative bg-white/10 backdrop-blur-md border-4 border-yellow-300/50 rounded-3xl p-6 shadow-2xl overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 via-transparent to-blue-500/20 animate-pulse" />
                
                {/* 25 Year Image */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/25year.png"
                      alt="25 Years of Noor Educational System - Silver Jubilee 2001-2026"
                      width={500}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority
                    />
                  </motion.div>
                  
                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-6"
                  >
                    <p className="text-2xl font-bold text-yellow-300 mb-2">Silver Jubilee</p>
                    <p className="text-lg text-blue-100">A Legacy of Trust & Excellence</p>
                  </motion.div>
                </div>

                {/* Decorative sparkles */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-8 right-8 z-20"
                >
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="absolute bottom-8 left-8 z-20"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-yellow-300 rounded-tl-xl z-20" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-yellow-300 rounded-tr-xl z-20" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-yellow-300 rounded-bl-xl z-20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-yellow-300 rounded-br-xl z-20" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full opacity-10 blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-yellow-300 rounded-full opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
