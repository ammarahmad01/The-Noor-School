"use client"

import { motion } from "framer-motion"
import { Newspaper, Award } from "lucide-react"

export default function NewsHeroSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-6 py-3 mb-8"
          >
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">Updates & Achievements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            News & Milestones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 leading-relaxed"
          >
            Celebrating 25 years of achievements, community impact, and educational excellence.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
