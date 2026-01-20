"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, CheckCircle } from "lucide-react"

export default function WhyNoorHeroSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full px-6 py-3 mb-8"
          >
            <CheckCircle className="w-5 h-5 text-blue-300" />
            <span className="font-semibold">Proven, Scalable, Sustainable</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Why Noor Works
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
          >
            Data-driven evidence of a model that has stood the test of time — and is ready to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { label: "Years Operational", value: "25+" },
              { label: "Avg Monthly Fee", value: "PKR 3K" },
              { label: "Student Retention", value: "High" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
