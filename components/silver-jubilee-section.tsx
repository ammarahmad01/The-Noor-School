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
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Award className="w-16 h-16 text-blue-900" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                  >
                    2001 - 2026
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-2xl font-semibold text-white mb-2"
                  >
                    Silver Jubilee
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-blue-100"
                  >
                    A Legacy of Trust & Excellence
                  </motion.p>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-300 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-300 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-300 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-300 rounded-br-lg" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
